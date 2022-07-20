import React from 'react';

const BookContent = () => {
    const bookThumnail = window !== undefined ? localStorage.getItem("BOOK_THUMNAIL") : null;
    return (
        <div>
            <header className="header">
				<div className="main-title"><h1>Online Book Store</h1></div>
            </header>
            <div style={{top: 80, position: 'absolute'}}>
                <img src={bookThumnail} width={400} height={600}/>
            </div>
            <div style={{position: 'absolute', top: 80, left: 500}}>
                <p style={{fontWeight: 'bold', fontSize: 30}}>
                    THE SHERLOCK HOLMES
                </p>
                <hr></hr>
                <p style={{fontStyle: 'italic'}}>
                    by Arthur Conan Doyle
                </p>
            </div>
            
        </div>
    );
}

export default BookContent;
