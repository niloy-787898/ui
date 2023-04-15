import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Container from "../component/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1">Produuct</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center py-3">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img
                    src="/images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="w-75">
                  <p>Rolex Watch</p>
                  <p>Gold</p>
                  <p>L</p>
                </div>
              </div>
              <div className="cart-col-2">
                <div>
                  <h5 className="price mb-0">$ 100</h5>
                </div>
              </div>
              <div className="cart-col-2 ">
                <div>
                  <div>
                    <input
                      type="number"
                      id=""
                      name=""
                      min={1}
                      max={10}
                      defaultValue={1}
                      style={{ width: "70px" }}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="cart-col-4 ">
                <div className="d-flex align-items-center gap-15 mb-0">
                  <h5 className="price mb-0">$ 100</h5>
                  <div>
                    <AiOutlineDelete className="delete-icon fs-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/product" className="button my-3">
                Continue to Shipping
              </Link>
              <div>
                <h5>SubTotal: $100</h5>
                <p>Taxes & Shipping Calculated at checkout</p>
                <Link to="/checkout" className="button ">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
