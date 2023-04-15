import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import WishCart from "../component/WishCart";
import Container from "../component/Container";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrum title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <WishCart />
          <WishCart />
          <WishCart />
          <WishCart />
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
