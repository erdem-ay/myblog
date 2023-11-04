import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";



const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact the Publisher
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  erdem_ay@yahoo.com
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  +944 450 904 505
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Explorate
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Job Opportunities
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Advertise
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Membership
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Headquarter
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  191 Middleville Road, NY 1001, Sydney Australia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Connections
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex">
              <li className="">
                <BsFacebook />
              </li>
              <li className="ml-4">
                <RiTwitterXLine />
              </li>
              <li className="ml-4">
             < IoLogoYoutube/>
              </li>
              <li className="ml-4">
              <FaPinterest/>
              </li>
              <li className="ml-4">
           <FaBehanceSquare/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
