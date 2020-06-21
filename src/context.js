import React, { Component } from 'react'
import {storeProducts, detailProduct } from "./data"

const ProductContext = React.createContext()
class ProductProvider extends Component {

   state= {
       products: [],
       detailProduct,
       cart: [],
       modalOpen: false,
       modalProduct: detailProduct,
       cartSubtotal: 0,
       cartTotal: 0
   }

   componentDidMount() {
       this.setProducts();
   }

   setProducts = () => {
       let temProducts = [];
       storeProducts.forEach( item => {
            const singleItem = {...item}
            temProducts = [...temProducts, singleItem]
       })
       this.setState( () => {
            return {products: temProducts} 
       })
   }

   getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product
   }

   handleDetail = (id) => {
       const product = this.getItem(id)
       this.setState(() => {
           return {detailProduct: product}
       })
   }

   addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        product.inCart = true;
        product.count =1;
        const price = product.price;
        product.total = price
        this.setState(() => {
            return {products:tempProducts, cart:[...this.state.cart, product]};
        }, () => {
            console.log(this.state)
            this.addTotals();
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
                return {modalProduct : product, modalOpen: true}
        })
    }

    
    closeModal = () => {
        this.setState(() => {
                return { modalOpen: false}
        })
    }

    increment = (id) => {
        console.log("This is the increment method")
    }

    decrement = (id) => {
        console.log("This is the decrement method")
    }

    removeItem = (id) => {
        console.log("item removed")
    }

    clearCart = () => {
        console.log("Cart cleared")
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax + tax
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
               cartTax: tax,
               cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}