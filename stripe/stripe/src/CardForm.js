import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Modal from "react-bootstrap/Modal";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';

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
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZWt0YXZhcnNhbmkxM0BnbWFpbC5jb20iLCJpYXQiOjE2Njk5NTI4NDd9.STU1Fp3WDYuZvc1YyET8vcthW4d1F391jIDZUVacIrE",
        };

        console.log(data);

        const response = await fetch(`http://192.168.0.10:7000/api/user/addCard`, {
            method: "POST",
            headers: { "Content-Type": "application/json", lang: "en" },
            body: JSON.stringify(data),
        });

        console.log(await response.json());

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

            {/* <GoogleReCaptchaProvider
                reCaptchaKey="[Your recaptcha key]"
                language="[optional_language]"
                useRecaptchaNet="[optional_boolean_value]"
                useEnterprise="[optional_boolean_value]"
                scriptProps={{
                    async: false, // optional, default to false,
                    defer: false, // optional, default to false
                    appendTo: 'head', // optional, default to "head", can be "head" or "body",
                    nonce: undefined // optional, default undefined
                }}
                container={{ // optional to render inside custom element
                    element: "[required_id_or_htmlelement]",
                    parameters: {
                        badge: '[inline|bottomright|bottomleft]', // optional, default undefined
                        theme: 'dark', // optional, default undefined
                    }
                }}
            >

            </GoogleReCaptchaProvider>, */}

            <GoogleReCaptchaProvider reCaptchaKey="192.168.0.10">
                <GoogleReCaptcha />
            </GoogleReCaptchaProvider>,

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
