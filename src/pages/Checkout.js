import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <div className="website-name pb-2 d-inline-block">
                <h3>NanoSoft IT</h3>
              </div>

              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/cart">Cart </a>
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">
                Shahinur islam (niloywb203@gmail.com)
              </p>
              <h4 className="title pb-2">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap justify-content-between gap-30"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected desabled>
                      Select Your Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="w-100">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your House,Suit etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    {" "}
                    <option value="" selected desabled>
                      Select Your State
                    </option>{" "}
                  </select>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Zip code"
                  />
                </div>
                <div className="w-100 my-3">
                  <div className="d-flex justify-content-between">
                    <Link to="/cart" className="d-flex gap-10 text-dark">
                      <BiArrowBack className="fs-5  " />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="checkout-right-data">
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "0px" }}
                        className="badge rounded-circle bg-secondary text-white p-2 position-absolute"
                      >
                        3
                      </span>
                      <img
                        src="/images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-45">
                      <h5 className="title">Rolex Watch</h5>
                      <p className="mb-0">Gold / L</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h5 className="flex-grow-1 price mb-0">$ 100</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-total border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Sub Total</p>
                  <p>$100</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$100</p>
                </div>
              </div>

              <div className="total d-flex justify-content-between align-items-center py-4">
                <h4>Total</h4>
                <h4>$100</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
