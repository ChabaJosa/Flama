import React, { Component }     from "react";
import Title                    from "../title";
import CartColumns              from "./cartColumns";
import EmptyCart                from "./emptyCart";
import { ProductConsumer }      from "../../context";
import CartList                 from "./cartList"
import CartTotals               from "./cartTotals"

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            //  could have also used destructuring as follows
            //  const {cart} = value

            if (value.cart.length !== 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
