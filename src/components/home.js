import React from 'react'
import ProductList from "./productList"

export default function home() {
    return (
        <>  
            <div className="minimalistFront" >
                <h1 className="titleText titleAnimation" >Welcome</h1>
                <h1 className="titleText titleAnimation" >to</h1>
                <h1 className="titleText" id="FlamaTitle" > Flama</h1>

            </div>
            <ProductList />
        </>
    )
}
