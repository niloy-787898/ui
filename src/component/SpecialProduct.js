import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
  return (
    <div className="">
      <Link className="special-product-cart position-relative">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src="images/watch.jpg" alt="watch" />
          </div>
          <div>
            <div className="special-product-content">
              <h6 className="brand">Rolex</h6>
              <h5 className="title">Ramjan is not so far</h5>
              <ReactStars
                count={5}
                value={4}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$100</span>&nbsp;<strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0 d-flex gap-10">
                  <b>5 </b>Days
                </p>
                <div
                  className="d-flex
                align-items-center gap-10"
                >
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="product-count my-3">
                <p>Products:5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link to="/cart" className="button">
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpecialProduct;
