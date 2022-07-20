import React, { useState } from 'react';
import "./Checkout.css";

const API_SUBMIT_BILL_ENDPOINT = process.env.REACT_APP_API_SUBMIT_BILL_ENDPOINT;

const Checkout = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const total = window !== undefined ? localStorage.getItem("TOTAL") : 0;

    const cartItems = window !== undefined ? localStorage.getItem("CART_ITEMS") : null;

    const handleOnBack = async () => {
        if (window !== undefined) {
            window.location = window.location.origin;
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

		if (window !== undefined) {
            await fetch(API_SUBMIT_BILL_ENDPOINT, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    address: address,
                    phone_number: phoneNumber,
                    total_money: total,
                    bookList: JSON.parse(cartItems).map(item => ({
                        book_id: item.book_id,
                        quantity: item.quantity
                    }))
                })
            })
            .catch(error => alert(error));

            alert("Submitted successfully, thanks you!!!");

            window.location = window.location.origin;
		}
	}

    return (
        <div>
            <header className="header" style={{position: "relative"}}>
				<div className="main-title"><h1>Online Book Store</h1></div>
                <button className="btn-return" onClick={() => handleOnBack()}>
                    BACK TO MAIN PAGE
                </button>
            </header>
            <div className="chk-container">
                <div className="title">
                    <h1>Checkout</h1>
                </div>
                <div className="input-container">
                    <form id="input-form" onSubmit={handleOnSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="name">Address</label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <label htmlFor="name">Phone Number</label>
                        <input
                            id="phone_number"
                            type="number"
                            name="phone_number"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        <label htmlFor="name">Card Number</label>
                        <input
                            id="card_number"
                            type="number"
                            name="card_number"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                        />
                    </form>
                </div>
                <div style={{marginTop: 10, display: "flex", justifyContent: "center"}}>
                    <p>Total: {total}$</p>
                </div>
                <div className="btn-submit">
                    <input type="submit" value="SUBMIT" form="input-form"/>
                </div>
            </div>
        </div>
    )
}

export default Checkout;