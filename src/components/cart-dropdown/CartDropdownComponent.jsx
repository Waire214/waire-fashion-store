import React from 'react';

import CustomButtonComponent from '../custom-button/CustomButtonComponent';
import './CartDropdownStyles.scss'

const CartDropdownComponent = () => {
  return <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButtonComponent> GO TO CHECKOUT </CustomButtonComponent>
  </div>;
};

export default CartDropdownComponent;
