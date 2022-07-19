import React from 'react';

const BookCard = ({history, book, addBookToCart, cartItems}) => {
	let doesBookExistInCart = cartItems.filter(item=> item.id === book.id).length > 0;

	const handleOnClick = () => {;
		if (window !== undefined) {
			localStorage.setItem("BOOK_THUMNAIL", book.thumbnail);
			window.location = window.location.origin + '/book_content';
		}
	}

	return(
		<div className="book-list-item">
			<img src={book.thumbnail} alt={book.name} style={{cursor: 'pointer'}} onClick={handleOnClick}/>
			<p>{book.title}</p>
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