import React from 'react';

const BookContent = () => {
    const bookThumnail = window !== undefined ? localStorage.getItem("BOOK_THUMNAIL") : null;
    const bookName = window !== undefined ? localStorage.getItem("BOOK_NAME") : null;
    const bookAuthor = window !== undefined ? localStorage.getItem("BOOK_AUTHOR") : null;
    const bookIntro = window !== undefined ? localStorage.getItem("BOOK_INTRO") : null;
    const bookPrice = window !== undefined ? localStorage.getItem("BOOK_PRICE") : null;
    
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
                <div style={{width: "40%", marginLeft: "8%"}}>
                    <p style={{fontWeight: 'bold', fontSize: 30}}>{bookName}</p>
                    <hr></hr>
                    <p style={{fontStyle: 'italic', fontSize: 16}}>
                        by {bookAuthor} (Author)
                    </p>
                    <p style={{fontSize: 18}}>
                        {bookIntro}...
                    </p>
                    <p style={{fontWeight: 'bold', fontSize: 22}}>
                       Price: {bookPrice} $ 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookContent;
