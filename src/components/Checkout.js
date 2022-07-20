import React, { useState } from 'react';
import "./Checkout.css";

const Checkout = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    const total = window !== undefined ? localStorage.getItem("TOTAL") : 0;

    const handleOnClick = () => {;
		if (window !== undefined) {
			window.location = window.location.origin;
		}
	}

    return (
        <div>
            <header className="header" style={{position: "relative"}}>
				<div className="main-title"><h1>Online Book Store</h1></div>
                <button className="btn-return" onClick={() => handleOnClick()}>
                    BACK TO MAIN PAGE
                </button>
            </header>
            <div className="chk-container">
                <div className="title">
                    <h1>Checkout</h1>
                </div>
                <div className="input-container">
                    <form>
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
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>
        </div>
    )
}

export default Checkout;