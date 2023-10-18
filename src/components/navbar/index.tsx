"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import UserMenu from "../userMenu/index";

interface AuthToken {
  token: string | null;
}

const Navbar: React.FC = () => {
  const [token, setToken] = useState<AuthToken>();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tokenInfo: AuthToken = {
      token: window.localStorage.getItem("token"),
    };
    setToken(tokenInfo);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:px-24 md:py-4 lg:px-24 lg:py-0  flex justify-between  items-center bg-white">
      <Link href="/">
        <div className="flex items-center cursor-pointer space-x-2 text-black transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="65"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="40" fill="#f39c12" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".0em"
              fontSize="32"
              fill="#fff"
            >
              WY
            </text>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              dy=".4em"
              fontSize="20"
              fill="#fff"
            >
              Blog
            </text>
          </svg>
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex items-center space-x-4  md:mr-0 mr-4 ">
          <li className="font-semibold text-gray-700">
            <Link href="/about">
              <div className="flex items-center">
                <FaInfoCircle className="text-orange-400 text-xl" />{" "}
                <span className="ml-2 hidden md:block">About</span>
              </div>
            </Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/contact">
              <div className="flex items-center">
                <FaEnvelope className="text-orange-400 text-xl" />{" "}
                <span className="ml-2 hidden md:block">Contact</span>
              </div>
            </Link>
          </li>
          <li className="font-semibold">
            {token?.token ? (
              <div className="flex lg:space-x-4 sm:space-x-2">
                <div className="flex my-auto relative">
                  <BsFillPersonFill
                    onClick={toggleMenu}
                    className="text-2xl text-emerald-400 hover:text-orange-300 cursor-pointer"
                  />
                  {isMenuOpen && (
                    <UserMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
                  )}
                </div>
              </div>
            ) : (
              <Link href="/login">
                <div className="flex items-center">
                  <BsFillPersonFill className="text-orange-400  text-2xl" />
                  <span className="ml-2 hidden md:block">Login</span>
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
