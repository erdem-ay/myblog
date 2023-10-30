"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook, BsFillPersonFill, BsLinkedin } from "react-icons/bs";
import UserMenu from "../userMenu/index";
import { useStore } from "@/stores";

const Navbar: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState<boolean>();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user } = useStore();

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  if (!domLoaded) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-1440 h-[80px] bg-black bg-opacity-20">
      <Link href="/">
        <div className="relative font-spartan text-[20px] font-semibold leading-[22px] tracking-0 text-left bg-F8F9FA">
          <text className="w-[69px] h-[22px] mt-[29px] ml-[70px] text-white font-extrabold">WY BLOG</text>
        </div>
      </Link>
      <div className="flex">
        <div className="flex items-center">
          <ul className="flex items-center ">
            <li className="flex ml-4">
              <Link href="/">
                <text className="font-semibold hidden md:block text-white">Home</text>
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="/about">
                <text className="font-semibold hidden md:block text-white">About</text>
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="/contact">
                <p className="font-semibold hidden md:block text-white">Contact Us</p>
              </Link>
            </li>
            <li className="flex ml-4">
              {user?.firstName ? (
                <div className="flex lg:space-x-4 sm:space-x-2">
                  <div className="flex my-auto relative">
                    <BsFillPersonFill
                      onClick={toggleMenu}
                      className="text-2xl text-emerald-600 hover:text-white cursor-pointer "
                    />
                    {isMenuOpen && (
                      <UserMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
                    )}
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <div className="flex items-center">
                    <span className="font-semibold hidden md:block text-white">Login</span>
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="h-8 ml-4 border-[1px] border-white"/>
        <div className="flex items-center mr-16">
          <ul className="flex items-center">
            <li className="flex ml-4">
              <Link href="https://www.facebook.com/" target="_blank">
                <BsFacebook className="text-white" />
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="https://twitter.com/"target="_blank" >
                <RiTwitterXLine className="text-white" />
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="https://www.youtube.com/"  target="_blank">
                <IoLogoYoutube className="text-white" />
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="https://www.linkedin.com/in/erdem-ay/"  target="_blank">
                <BsLinkedin className="text-white"/>
              </Link>
            </li>
            <li className="flex ml-4">
              <Link href="https://github.com/erdem-ay" target="_blank">
                <ImGithub className="text-white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
