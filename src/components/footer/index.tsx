import Link from "next/link";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillBehanceCircle } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col  bg-gray-500 text-center text-neutral-900 relative">
      <div className="flex flex-col md:flex-row h-72 pt-16 justify-evenly text-white">
        <div className="flex-1">
          <h2 className="font-lora text-xl font-semibold leading-25 tracking-0 text-left">
            Contact the Publisher
          </h2>
          <p className="pt-4 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            erdem_ay@yahoo.com
          </p>
          <p className="pt-2 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            +422 674 1232 131
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-lora text-xl font-semibold leading-25 tracking-0 text-left">
            Explorate
          </h2>
          <p className="pt-4 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            About{" "}
          </p>
          <p className="pt-2 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            Partners{" "}
          </p>
          <p className="pt-2 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            Job Opportunities
          </p>
          <p className="pt-2 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            Advertise
          </p>
          <p className="pt-2 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            Membership
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-lora text-xl font-semibold leading-25 tracking-0 text-left">
            Headquarter
          </h2>
          <p className="pt-4 font-Lora text-sm font-normal leading-15 tracking-0 text-left">
            191 Middleville Road,
            <br /> NY 1001, Sydney <br />
            Australia
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-lora text-xl font-semibold leading-25 tracking-0 text-left">
            Connections
          </h2>
          <div className="flex pt-4 text-white justify-around space-x-8">
            <Link href="https://www.facebook.com/" target="_blank">
              <BsFacebook />
            </Link>
            <Link href="https://twitter.com/"target="_blank" >
              <RiTwitterXLine />
            </Link>
            <Link href="https://www.youtube.com/"  target="_blank">
              <IoLogoYoutube />
            </Link>
            <Link href="https://tr.pinterest.com/"  target="_blank">
              <BsPinterest />
            </Link>
            <Link href="https://www.behance.net/" target="_blank">
              <AiFillBehanceCircle />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
