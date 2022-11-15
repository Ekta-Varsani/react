import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Modal from "react-bootstrap/Modal";

const CardForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        console.log("[PaymentMethod]", payload);
    };

    return (
        <>
            <div className="justify-content-center mt-5">
                <button className="btn" onClick={handleShow}>Add card</button>
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
                                onChange={event => {
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
                        <button className="btn d-block mx-auto" type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CardForm;