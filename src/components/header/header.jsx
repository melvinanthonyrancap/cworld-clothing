import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js';


const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;