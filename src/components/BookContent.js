import React from 'react';

const BookContent = () => {
    const bookThumnail = window !== undefined ? localStorage.getItem("BOOK_THUMNAIL") : null;
    return (
        <div>
            <img src={bookThumnail} width={400} height={600}/>
        </div>
    );
}

export default BookContent;
