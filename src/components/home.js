import React from 'react'
import ProductList from "./productList"

export default function home() {
    return (
        <>  
            <div className="minimalistFront" >
                <h1 className="titleText titleAnimation" >Welcome to <span id="FlamaTitle" > Flama</span> </h1> 
            </div>
            <ProductList />
        </>
    )
}
