import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Container from "../component/Container";
import CustomInput from "../component/CustomInput";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrum title="Contact" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.588729619201!2d90.39147131434869!3d23.7620410942498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a048e66ee9%3A0x692cd2612fdc7768!2sFarmgate-Tejkunipara%20Road%2C%20Dhaka%201215!5e0!3m2!1sen!2sbd!4v1679999824756!5m2!1sen!2sbd"
              title="myFrame"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-wrapper-info d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-20">
                  <CustomInput
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />

                  <CustomInput
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />

                  <CustomInput
                    type="tel"
                    className="form-control"
                    placeholder="Enter Your Mobile Number"
                  />

                  <div>
                    <textarea
                      cols={30}
                      rows={4}
                      id=""
                      name=""
                      type="text"
                      className="form-control w-100"
                      placeholder="Type Your Comment Here"
                    />
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get In Touch With Us</h3>
                <div className="contact-info">
                  <ul className="ps-0">
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno : 195/3 A, Tejkunipara, Tejgaon, Dhaka
                      </address>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <FiPhoneCall className="fs-5" />
                      <a href="tel:+880 1798633672">+880 1798633672</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:nanosoft@gmail.com">nanosoft@gmail.com</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <AiOutlineInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10AM - 10PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
