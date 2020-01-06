import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    // use filter
                    //.filter((item, idx) => idx < 4 )
                    // use slice
                    .slice(0,4)
                    .map(({ id, ...otherItemProps }) => (
                        //<div key={item.id}>{item.name}</div>
                        <CollectionItem key={id} { ...otherItemProps } />
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;