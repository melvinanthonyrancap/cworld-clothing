import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview'

class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              collections: SHOP_DATA
        }
    }
    
    render() {
        const { collections } = this.state
        return (
            <div>
                {
                   collections.map(({ id, ...otherProps}) => (
                        <PreviewCollection key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;