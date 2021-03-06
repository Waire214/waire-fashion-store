import React from 'react'

import { connect } from 'react-redux'

import CustomButtonComponent from '../custom-button/CustomButtonComponent'

import { addItem } from '../../redux/cart/CartAction'

import './CollectionItemStyles.scss'

const CollectionItemComponent = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div 
                className='image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButtonComponent onClick={() => addItem(item)} inverted>Add To Cart</CustomButtonComponent>
            {/* </div>  */}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItemComponent)
