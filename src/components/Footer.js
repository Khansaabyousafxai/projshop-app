import React from "react";
import { bazaar, payment } from "../assets";
import {
  FaSquareFacebook,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdSpatialTracking } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={bazaar} alt="bazaar" />
          <p className="text-white text-sm tracking-wide">0 @ReactBD.COM</p>
          <img className="w-56" src={payment} alt="payment" />

          <div className="flex gap-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaSquareFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-2xl mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-4">
            <p>mobile: 03123333335</p>
            <p>phone: 021-0000087</p>
            <p>telephone: 042-445556</p>
            <p>Email: abdullah@yahoo.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-2xl mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <CgProfile />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <IoIosCheckmarkCircleOutline />
              </span>
              check out
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdSpatialTracking />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdOutlineSupportAgent />
              </span>
              help and support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="email"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
