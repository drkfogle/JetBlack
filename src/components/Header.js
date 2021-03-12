import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket, user}] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
      <img className="header-logo" src='https://s3.amazonaws.com/colorslive/jpg_512x512/251530-bL6yL_r0cpsgPjPZ.jpg' alt="header-logo"/>
      </Link>
      <div className= "header-search">
        <input
        className="header-search-input"
        type="text"
        />
        <SearchIcon className="header-searchIcon"/>
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-child">
            <span className="header-childone">Welcome Guest</span>
            <span className="header-childtwo">{user ? "Sign Out" : "Sign In " }</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header-child">
            <span className="header-childone">Orders &</span>
            <span className="header-childtwo">Returns</span>
          </div>
        </Link>

          <div className="header-child">
            <span className="header-childone">On</span>
            <span className="header-childtwo">Sale</span>
          </div>

          <Link to="/checkout">
            <div className="header-shoppingbasket">
              <ShoppingBasketIcon />
              <span className="header-childtwo header-basketcount">{basket?.length}</span>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Header
