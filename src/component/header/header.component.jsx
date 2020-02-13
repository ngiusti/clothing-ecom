import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.componenet';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectorCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink  to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/shop">
                Contact
            </OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
                :
                <OptionLink to="/sign-in">Sign In</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectorCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header); 