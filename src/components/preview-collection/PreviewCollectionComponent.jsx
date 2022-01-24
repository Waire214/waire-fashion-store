import React from 'react'

import CollectionItemComponent from '../collection-item/CollectionItemComponent'

import './PreviewCollectionStyles.scss'

const PreviewCollectionComponent = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => (
                            <CollectionItemComponent key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollectionComponent
