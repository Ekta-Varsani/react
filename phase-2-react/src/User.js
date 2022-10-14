import "./User.css";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function User() {
    const [userList, setUserList] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('')
    const [addUser, setAddUser] = useState({
        UserName: "",
        countryId: "",
        Email: "",
        PhoneNumber: "",
        image: "",
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    function displayUsers() {
        fetch("http://192.168.0.73:4000/api/user/getuser/alluser").then(
            (result) => {
                result.json().then((res) => {
                    console.log(res);
                    setUserList(res);
                });
            }
        );

        fetch("http://192.168.0.73:4000/api/countery").then((result) => {
            result.json().then((res) => {
                setCountryList(res);
            });
        });
    }

    useEffect(() => {
        displayUsers();
    }, []);

    function inputHandler(event) {
        setAddUser({
            ...addUser,
            [event.target.name]: event.target.value
        })
    }

    let file1;
    let imageSrc
    function readURL(event) {

        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            console.log(file.name)
            file1 = file.name
            setAddUser({
                image: file1
            })
            const reader = new FileReader();
            reader.onload = e => imageSrc = reader.result;
            reader.readAsDataURL(file1 = file);
        }
        inputHandler()
    }

    function onAddUser() {
        console.log(JSON.stringify(addUser));
        // fetch("http://192.168.0.73:4000/api/user/addUser", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(addUser),
        // }).then((result) => {
        //     displayUsers()
        // });
    }

    function getDetailsofSelectedUser(data) {
        setSelectedUserId(data._id)
        console.log(data);
        setAddUser({
            ...addUser,
            UserName: data.UserName,
            countryId: data.countryId.CounteryName,
            Email: data.Email,
            PhoneNumber: data.PhoneNumber,
            image: data.image,
        })
        console.log(addUser);
    }

    function onChangeHnadler(event) {
        setAddUser({
            ...addUser,
            [event.target.name]: event.target.value,
        })
    }

    function onUpdateUser() {
        console.log(addUser);
    }


    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-2">
                        <label className="mt-0 imageProfile" htmlFor="choose-file" name="image" id="preview">
                            <img className="rounded" src={imageSrc} id="img-preview" height="10px" width="60px" />
                        </label>
                        <input
                            value={file1}
                            type="file"
                            id="choose-file"
                            name="image"

                            // onChange={inputHandler}
                            onChange={readURL}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={addUser.UserName}
                            className="form-control border border-info text-info"
                            type="text"
                            placeholder="name"
                            name="UserName"
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col">
                        <input
                            value={addUser.Email}
                            className="form-control border border-info text-info"
                            type="email"
                            placeholder="email"
                            name="Email"
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col">
                        <select
                            // value={addUser.countryId._id}
                            className="form-select border border-info text-info"
                            name="countryId"
                            onChange={inputHandler}
                        >
                            {countryList.map((country) => (
                                <option value={country._id}>{country.CounteryName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col">
                        <input
                            value={addUser.PhoneNumber}
                            className="form-control border border-info text-info"
                            type="number"
                            placeholder="phone"
                            name="PhoneNumber"
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col-1">
                        <button
                            className="btn btn-info text-white float-end"
                            onClick={onAddUser}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <table id="myTable" className="table ">
                        <thead className="bg-info text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Country</td>
                                <td>Phone</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.UserName}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.countryId.CounteryName}</td>
                                            <td>{user.PhoneNumber}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="info"
                                                        className="text-white"
                                                        id="dropdown-basic"
                                                    >
                                                        Action
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => { handleShow(); getDetailsofSelectedUser(user) }}>
                                                            Edit
                                                        </Dropdown.Item>
                                                        <hr />
                                                        <Dropdown.Item>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mb-3">
                        <img src={addUser.image} />
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="username" className="float-end">
                                Name
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={addUser.UserName}
                                className="form-control"
                                id="username"
                                name="UserName"
                                type="text"
                                onChange={onChangeHnadler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="email" className="float-end">
                                Email
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={addUser.Email}
                                className="form-control"
                                id="email"
                                name="Email"
                                type="email"
                                onChange={onChangeHnadler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="country" className="float-end">
                                Country
                            </label>
                        </div>
                        <div className="col-7">
                            <select
                                value={addUser.countryId}
                                className="form-select"
                                name="countryId"
                                id="country"
                                onChange={onChangeHnadler}
                            >
                                {countryList.map((country) => (
                                    <option value={country._id}>{country.CounteryName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="phone" className="float-end">
                                Phone
                            </label>
                        </div>
                        <div className="col-7">
                            <input
                                value={addUser.PhoneNumber}
                                className="form-control"
                                id="phone"
                                name="PhoneNumber"
                                type="number"
                                onChange={onChangeHnadler}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3"></div>
                        <div className="col-7 ">
                            <button className="btn btn-info float-end text-white" onClick={onUpdateUser}>
                                Edit
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default User;
