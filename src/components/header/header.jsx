import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';



const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" title="MAIN PAGE"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className="option" to="/signIn">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {   hidden ? null: <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);