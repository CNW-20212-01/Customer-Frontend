import React from 'react';

const BookCard = ({book, addBookToCart, cartItems}) => {
	let doesBookExistInCart = cartItems.filter(item => item.book_id === book.book_id).length > 0;

	const handleOnClick = () => {;
		if (window !== undefined) {
			localStorage.setItem("BOOK_THUMNAIL", book.image);
			localStorage.setItem("BOOK_NAME", book.book_name);
			localStorage.setItem("BOOK_AUTHOR", book.author_name);
			localStorage.setItem("BOOK_INTRO", book.intro);
			localStorage.setItem("BOOK_PRICE", book.price);
			window.location = window.location.origin + '/book_content';
		}
	}

	return (
		<div className="book-list-item">
			<img src={book.image} alt={book.book_name} style={{cursor: 'pointer'}} onClick={handleOnClick}/>
			<p>{book.book_name}</p>
			<p className="book-price"><i className="fas fa-dollar-sign"></i> {book.price}</p>
			<button 
				onClick={()=>addBookToCart(book)} 
				className={`cart-button ${doesBookExistInCart? 'in-cart':''}`}
			>
				{doesBookExistInCart? <span><i className="fas fa-check"></i>Added</span>: <span>Add To Cart</span>}
			</button>
		</div>
	);

}

export default BookCard;