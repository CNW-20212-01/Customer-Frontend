import React from 'react';
import CartCard from './CartCard';

const CartList = ({
		cartItems,
		cartTotal,
		removeBookFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity
	}) =>{
	return(
		<div className="cart-list">
			<React.Fragment>
				<div className="cart-details">
					<p className="cart-total">Total: <i className="fas fa-dollar-sign"></i> {cartTotal}</p>
				</div>
				<hr />
				{cartItems.map(item=>(
					<CartCard 
						key={`cart-${item.id}`} 
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
				<button type="button" class="btn-checkout">Checkout</button>
				
			</React.Fragment>
		</div>
	);
}

export default CartList;