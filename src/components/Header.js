import React from 'react';

class Header extends React.Component{
	render() {
		let {keyword, 
			handleSearchChange, 
			cartCount, 
			handleCartOpen, 
			handleMobileSearch, 
			handleSearchSubmit} = this.props;
		return(
			<header className="header">
				<div className="main-title"><h1>Online Book Store</h1></div>
				<div className={"search-form-container"}>
					<form className="search-form" onSubmit={(e)=>handleSearchSubmit(e)}>
						<input type="text" value={keyword} placeholder="Search for books..."  onChange={(e)=>handleSearchChange(e)}/>
					</form>
				</div>
				<div className="mobile-search" onClick={handleMobileSearch}>
					<i className="fas fa-search search-icon" ></i>
				</div>
				<div className="cart">
					<i className="fas fa-shopping-cart cart-icon" onClick={handleCartOpen} >
						<span className="cart-count">{cartCount}</span>
					</i>

				</div>
			</header>
		)
	}
}

export default Header;