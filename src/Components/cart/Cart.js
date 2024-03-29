import React, { Component } from "react";
import Title from "../Title";
import CartColmns from "./CartColmns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="Your" title="Cart" />
                  <CartColmns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return (
                <>
                  <EmptyCart />
                </>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
