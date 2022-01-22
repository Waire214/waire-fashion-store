import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/CartAction'

import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg'

import './CartIconStyles.scss'

const CartIconComponent = ({toggleCartHidden}) => {
  return <div className='cart-icon' onClick={toggleCartHidden}>
      <CartIcon className='shopping-icon' />
      <span className='item-count'>0</span>
  </div>;
};

const mapDispatchTProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchTProps)(CartIconComponent);
