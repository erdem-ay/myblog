import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 p-4 text-white mt-auto flex flex-col items-center">
      <div className="container mx-auto flex justify-between w-full">
        <div className="text-left">Erdem Ay</div>
        <div className="text-right flex items-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <BsInstagram alt="İnstagram" className="w-6 h-6 text-red-900" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <BsFacebook alt="Facebook" className="w-6 h-6 text-red-900" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaXTwitter alt="Twitter" className="w-6 h-6 text-red-900" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
