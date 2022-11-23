import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Modal from "react-bootstrap/Modal";

const CardForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        const token = await stripe.createToken(elements.getElement(CardElement));
        console.log(token.token);

        const data = {
            userId: "636e392744cc30cebd16f421",
            paymentId: "63720f08f8edc7cd55d63fd1",
            paymentMethod: payload.paymentMethod.id,
            card: token.card,
            token: token.token,
            jwtToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZXZhcnNhbmRkaUBnbWFpbC5jb20iLCJpYXQiOjE2Njg0MTUxMTR9.T2BR4tyB8rrXWs1CJnPsK3NDTL0OKxW0qbM4IxghUW8",
        };

        console.log(data);

        const response = await fetch(`http://192.168.0.10:7000/api/user/addCard`, {
            method: "POST",
            headers: { "Content-Type": "application/json", lang: "en" },
            body: JSON.stringify(data),
        });

        console.log(response);

        console.log("[PaymentMethod]", payload);
        // console.log(payload.paymentMethod.id);
        // console.log(payload.paymentMethod.card);
    };

    return (
        <>
            <div className="justify-content-center mt-5">
                <button className="btn" onClick={handleShow}>
                    Add card
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Card Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <label className="row ">
                            <CardElement
                                //   options={options}
                                onReady={() => {
                                    console.log("CardElement [ready]");
                                }}
                                onChange={(event) => {
                                    console.log("CardElement [change]", event);
                                }}
                                onBlur={() => {
                                    console.log("CardElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardElement [focus]");
                                }}
                            />
                        </label>
                        <button
                            className="btn d-block mx-auto"
                            type="submit"
                            disabled={!stripe}
                        >
                            Pay
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CardForm;
