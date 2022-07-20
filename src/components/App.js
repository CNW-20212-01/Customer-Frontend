import React, { useEffect, useState } from 'react';
import Header from './Header';
import BookList from './BookList';
import CartList from './CartList';
import './App.css';

//import {books} from './data';

const API_BOOKS_ENDPOINT = process.env.REACT_APP_API_BOOKS_ENDPOINT;

const App = () => {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleSearchChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }

  const addBookToCart = (book) => {
    let cartItems = cart.slice();
    let doesBookExist = cartItems.filter(item => item.book_id === book.book_id).length > 0;
    if (!doesBookExist) {
      cartItems.push({...book, quantity: 1});
      setCart(cartItems);
      setCartTotal(cartTotal => cartTotal + book.price);
    }
  }

  const removeBookFromCart = (book) => {
    let cartItems = cart.slice();
    cartItems = cartItems.filter(cartItem=> cartItem.book_id !== book.book_id)
    setCart(cartItems);
    setCartTotal(cartTotal => cartTotal - (book.price * book.quantity));
  }

  const handleIncreaseQuantity = (book) => {
    let cartItems = cart.slice();
    let bookIndex = cartItems.findIndex(item => item.book_id === book.book_id);
    cartItems[bookIndex].quantity += 1;
    setCart(cartItems);
    setCartTotal(cartTotal => cartTotal + book.price);
  }

  const handleDecreaseQuantity = (book) => {
    let cartItems = cart.slice();
    let bookIndex = cartItems.findIndex(item => item.book_id === book.book_id);
    let currentQuantity = cartItems[bookIndex].quantity;
    if (currentQuantity > 1){
      cartItems[bookIndex].quantity -= 1;
      setCart(cartItems);
      setCartTotal(cartTotal => cartTotal - book.price);
    }else{
      removeBookFromCart(book);
    }
  }

  const handleCartOpen = () => {
    setOpenCart(openCart => !openCart);
  }

  const fetchTableData = async () => {
    await fetch(API_BOOKS_ENDPOINT, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setBooks(data.map(item => ({
        book_id: item.book_id,
        book_name: item.Book_name,
        genre: item.genre,
        author_name: item.author_name,
        price: item.price,
        pages: item.pages,
        publisher: item.publisher,
        publishing_year: item.publishing_year,
        purchased: item.purchased,
        intro: item.intro,
        image: item.image
      })));
      setIsLoading(false);
    })
    .catch(error => alert(error));
  }

  useEffect(() => {
    fetchTableData();
  }, []);

  const filteredBooks = books.filter((book)=>{
    let bookTitle = book.book_name.toLowerCase();
    return bookTitle.indexOf(keyword) > -1;
  });

  return (
    <div>
      <Header 
        handleSearchChange={handleSearchChange}
        cartCount={cart.length}
        handleCartOpen={handleCartOpen}
        keyword={keyword}
        handleSearchSubmit={handleSearchSubmit}
      />
      {!isLoading && <div className="container">
        <BookList books={filteredBooks}
                  addBookToCart={addBookToCart}
                  cartItems={cart}
        />
        <div className={`cart-container ${openCart? 'cart-open' : ''}`}>
          <CartList 
            cartItems={cart}
            cartTotal={cartTotal}
            removeBookFromCart={removeBookFromCart}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
        </div>
      </div>}
    </div>
  );
}

export default App;
