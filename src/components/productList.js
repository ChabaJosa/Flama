import React, { Component } from 'react'
import Product from "./product"

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from ProductList</h3>
                <Product />
            </div>
        )
    }
}
