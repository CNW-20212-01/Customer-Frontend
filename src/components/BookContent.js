import React from 'react';

const BookContent = () => {
    const bookThumnail = window !== undefined ? localStorage.getItem("BOOK_THUMNAIL") : null;
    const bookTitle = window !== undefined ? localStorage.getItem("BOOK_TITLE") : null;
    
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
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{marginTop: 37}}>
                    <img src={bookThumnail} style={{boxShadow: "5px 8px 10px #888888"}} width={400} height={600}/>
                </div>
                <div style={{marginLeft: "8%"}}>
                    <p style={{fontWeight: 'bold', fontSize: 30}}>{bookTitle}</p>
                    <hr></hr>
                    <p style={{fontStyle: 'italic'}}>
                        by Arthur Conan Doyle
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookContent;
