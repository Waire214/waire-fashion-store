import React, { Component } from 'react'

import shopData from './ShopDataPage'
import PreviewCollectionComponent from '../../components/preview-collection/PreviewCollectionComponent'

export class ShopPageComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections : shopData
        }
    }
    
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollectionComponent key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPageComponent
