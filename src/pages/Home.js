import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../component/BlogCart";
import ProductCart from "../component/ProductCart";
import SpecialProduct from "../component/SpecialProduct";
import Container from "../component/Container";
import { services } from "../utils/Data";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/products/productSlice";

const Home = () => {
  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = () => {
    dispatch(getAllProduct());
  };
  return (
    <>
      <HomeContainer>
        <Container class1="home-wrapper-1 py-5">
          <div className="hero-container">
            <div className="">
              <div className="main-banner position-relative py-2">
                <img
                  src="/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner-1"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Super Charged For Pros</h4>
                  <h5>ipad S-13 pro</h5>
                  <p>From $999 or 42.3/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="d-flex flex-wrap align-items-center justify-content-between
                gap-10
              "
              >
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-01"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sells</h4>
                    <h5>HP Paviloion</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-02"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sells</h4>
                    <h5>Smart Watch</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative py-2">
                  <img
                    src="/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-03"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrivals</h4>
                    <h5>ipad S-13 pro</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner-04"
                  />
                  <div className="small-banner-content position-absolute py-2">
                    <h4>New Arrivals</h4>
                    <h5>Headphones</h5>
                    <p>
                      From $999 <br /> 42.3/month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="services">
                {services?.map((i, j) => {
                  return (
                    <div className="d-flex  align-items-center gap-15" key={j}>
                      <img src={i.image} alt="service" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>

        <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div>
              <div className="catagories-1">
                <div className="item">
                  <div className="item-text">
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="item ">
                  <div className="item-text">
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
                </div>

                <div className="item">
                  <div className="item-text">
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="featured-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12 ">
              <h3 className="blog-heading">Featured Collections</h3>
            </div>
            <ProductCart data={productState ? productState : []} />
          </div>
        </Container>

        <Container class1="famous-wrapper home-wrapper-2 py-5">
          <div className="famous-card-container">
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-001.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-002.jpg"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-004.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-004.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="special-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Special products</h3>
            </div>
            <div className="special-card-container">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </Container>

        <Container class1="popular-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Popular Product</h3>
            </div>
            <ProductCart data={productState ? productState : []} />
          </div>
        </Container>

        <Container class1="marquee-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="mrquee-inner-wrapper brand-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand-01" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="blog-card-container">
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
          </div>
        </Container>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;
  }
  .services,
  .catagories-1,
  .blog-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    background-color: #fff;
  }
  .famous-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .special-card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  /* .item-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  } */
  @media (max-width: 1000px) {
    .hero-container {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .services,
    .catagories-1,
    .blog-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .famous-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .special-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .services,
    .catagories-1,
    .blog-card-container {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }
    .famous-card-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .special-card-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .main-banner-content h5 {
      font-size: 25px;
      font-weight: 500;
      line-height: 28px;
    }
  }
`;
export default Home;
