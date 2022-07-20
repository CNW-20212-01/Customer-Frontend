import React from 'react';
import CartCard from './CartCard';

const CartList = ({
		cartItems,
		cartTotal,
		removeBookFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity
	}) =>{

	const handleOnClick = () => {
		if (window !== undefined) {
			window.location = window.location.origin + '/checkout';
		}
	}

	return(
		<div className="cart-list">
			<React.Fragment>
				<div className="cart-details">
					<p className="cart-total">Total: <i className="fas fa-dollar-sign"></i> {cartTotal}</p>
				</div>
				<hr />
				{cartItems.map(item=>(
					<CartCard 
						key={`cart-${item.book_id}`} 
						item={item}
						removeBookFromCart={removeBookFromCart}
						handleIncreaseQuantity={handleIncreaseQuantity}
						handleDecreaseQuantity={handleDecreaseQuantity}
					/>
				))}
				{cartItems.length === 0 &&
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<h3>Your Cart is Empty</h3>
					</div>
				}
				{cartItems.length !== 0 && <button type="button" class="btn-checkout" onClick={handleOnClick}>CHECKOUT</button>}
				
			</React.Fragment>
		</div>
	);
}

export default CartList;