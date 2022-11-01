import "./Country.css";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import $ from 'jquery';

function Country() {
    const [show, setShow] = useState(false);
    const [allCountryList, setAllCountryList] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [countryDetail, setCountryDetail] = useState({
        CounteryName: "",
        CurrencyCode: "",
        CounteryCode: "",
        CurrencySign: "",
        Sign: "",
    });
    const [updateBool, setUpdateBool] = useState(false);
    const [selectedCountryId, setSelectedCountryId] = useState("")

    const handleClose = () => {
        setShow(false);
        setUpdateBool(false)
        setCountryDetail({
            CounteryName: "",
            CurrencyCode: "",
            CounteryCode: "",
            CurrencySign: "",
            Sign: "",
        });
    };

    const handleShow = () => {
        setShow(true);
    };

    function getDetailOfSelectedCountry(data) {
        setUpdateBool(true)
        setSelectedCountryId(data._id)
        setCountryDetail({
            ...countryDetail,
            CounteryName: data.CounteryName,
            CurrencyCode: data.CurrencyCode,
            CounteryCode: data.CounteryCode,
            CurrencySign: data.CurrencySign,
            Sign: data.Sign,
        });
    }

    function setCountries() {
        fetch("http://192.168.0.10:4000/api/countery").then((result) => {
            result.json().then((res) => {
                setCountryList(res);
            });
        });
    }

    useEffect(() => {
        setCountries();
    }, []);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all").then((result) => {
            result.json().then((res) => {
                setAllCountryList(res);
            });
        });
    }, []);

    function selectCounty(event) {
        allCountryList.map((matchedCountry) => {
            if (event.target.value == matchedCountry.name) {
                setCountryDetail({
                    ...countryDetail,
                    CounteryName: matchedCountry.name,
                    CurrencyCode: matchedCountry.currencies[0].code,
                    CounteryCode: matchedCountry.callingCodes[0],
                    CurrencySign: matchedCountry.currencies[0].symbol,
                    Sign: matchedCountry.flag,
                });
            }
        });
    }

    function addCountry() {
        fetch("http://192.168.0.10:4000/api/countery/create", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(countryDetail),
        }).then((result) => {
            setCountries();
        });
        handleClose();
    }

    function onChangeHandler(event) {
        setCountryDetail({
            ...countryDetail,
            [event.target.name]: event.target.value
        })
    }

    function updateCountry() {
        fetch(`http://192.168.0.10:4000/api/countery/update/${selectedCountryId}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(countryDetail)
        }).then(result => {
            result.json().then(res => {
                handleClose()
                setCountries()
                const search = document.getElementById("search").value;
                for (let i = 0; i < countryList.length; i++) {
                    let list = countryList[i].CounteryName
                    if (list) {
        
                        if (list.indexOf(search) > -1) {
                            $('#' + i).show();
                        }
                        else {
                            $('#' + i).hide();
                        }
                    }
                }
            })
        })
    }

    function search(e) {
        const search = document.getElementById("search").value;
        for (let i = 0; i < countryList.length; i++) {
            let list = countryList[i].CounteryName
            if (list) {

                if (list.indexOf(search) > -1) {
                    $('#' + i).show();
                }
                else {
                    $('#' + i).hide();
                }
            }
        }
    }

    return (
        <>
            <Container className="mt-5 ">
                <Row>
                    <Col className="col-12 col-md-10">
                        <input
                            className="form-control form-control-lg"
                            id="search"
                            type="text"
                            placeholder="search country"
                            onChange={search}
                        />
                    </Col>
                    <Col className="col-12 col-md-2 d-grid">
                        <button
                            className="btn btn-danger btn-lg"
                            onClick={() => {
                                handleShow();
                            }}
                        >
                            <b>Add Country+</b>
                        </button>
                    </Col>
                </Row>
                <div className="row mt-3">
                    {countryList.map((country, index) => {
                        return (
                            <>
                                <div id={index} className="col-12 col-md-6 col-lg-3 mt-3 mb-3">
                                    <Card className="shadow">
                                        <Card.Header>
                                            <div className="row">
                                                <div className="col-10 float-end">
                                                    <b>{country.CounteryName}</b>
                                                </div>
                                                <div className="col-2">
                                                    <button
                                                        className="btn btn-sm"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#update"
                                                        onClick={() => {
                                                            handleShow();
                                                            getDetailOfSelectedCountry(country);
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-pencil"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <img
                                                id="flagImage"
                                                src={country.Sign}
                                                className="mx-auto my-3 d-block"
                                            />
                                            <br />
                                            <div className="card-text">
                                                <div className="row">
                                                    <div className="col-9">Currency Sign</div>
                                                    <div className="col-3">{country.CurrencySign}</div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-9">Country Phone Code</div>
                                                    <div className="col-3">{country.CounteryCode}</div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-9">Currency Code</div>
                                                    <div className="col-3">{country.CurrencyCode}</div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        );
                    })}
                </div>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mb-3">
                        {countryDetail.Sign ? (
                            <img className="mx-auto m-3 d-block" src={countryDetail.Sign} />
                        ) : null}
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlfor="selectCountry" className="float-end">
                                Country Name
                            </label>
                        </div>
                        <div className="col-7">
                            {updateBool ? (
                                < input value={countryDetail.CounteryName} className="form-control" type="text" disabled />
                            ) : (
                                <select
                                    value={countryDetail.CounteryName}
                                    className="form-select"
                                    id="selectCountry"
                                    name="CounteryName"
                                    onChange={selectCounty}
                                >
                                    {allCountryList.map((country) => {
                                        return (
                                            <>
                                                <option>{country.name}</option>
                                            </>
                                        );
                                    })}
                                </select>
                            )}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlfor="currencyCode" className="float-end">
                                Currency Code
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={countryDetail.CurrencyCode}
                                className="form-control"
                                id="currencyCode"
                                name="CurrencyCode"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlfor="countryCode" className="float-end">
                                Country Code
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={countryDetail.CounteryCode}
                                className="form-control"
                                id="countryCode"
                                name="CounteryCode"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlfor="currencySign" className="float-end">
                                Currency Sign
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={countryDetail.CurrencySign}
                                className="form-control"
                                id="currencySign"
                                name="CurrencySign"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-7 ">
                            {
                                updateBool ?
                                    <button className="btn btn-danger float-end" onClick={updateCountry}>
                                        Update Country
                                    </button> :
                                    <button className="btn btn-danger float-end" onClick={addCountry}>
                                        Add Country
                                    </button>

                            }
                            {/* <button className="btn btn-danger float-end" onClick={addCountry}>
                                Add Country
                            </button> */}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            
        </>
    );
}

export default Country;
