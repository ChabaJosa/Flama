import React from 'react'
import CartItem from  "./cartItem"

export default function cartList( {value} ) {


    return (
        <div className="container-fluid">
            {value.cart.map( item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
