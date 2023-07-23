import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-2  bg-neutral text-neutral-content">
          <div className="bg-[#1F2937] p-20 space-y-2">
            <p className="text-3xl font-bold">CONTACT US</p>
            <p>
              <span className="text-2xl font-bold">Email : </span>
              si****a77@gmail.com
            </p>
            <p>
              <span className="text-2xl font-bold">Number :</span> 01625334383
            </p>
          </div>
          <div className="bg-[#111827] p-20">
            <span className="footer-title">Follow US</span>
            <div className="flex space-x-2 mt-3">
              <a href="">
                <AiOutlineLinkedin className="text-3xl" />
              </a>
              <a href="">
                <AiOutlineGithub className="text-3xl" />
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer footer-center p-4 bg-black text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
