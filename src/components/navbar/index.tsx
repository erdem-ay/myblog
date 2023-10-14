"use client";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBlog, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

interface AuthToken {
  token: string | null;
}

let firstName: string | null = "";
let lastName: string | null = "";
if (typeof window !== "undefined") {
  firstName = window.localStorage.getItem("firstName");
  lastName = window.localStorage.getItem("lastName");
}

const Navbar: React.FC = () => {
  const [token, setToken] = useState<AuthToken>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tokenInfo: AuthToken = {
      token: window.localStorage.getItem("token"),
    };
    setToken(tokenInfo);
  }, []);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  const tokenDelete = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between px-28 items-center bg-white">
      <Link href="/">
        <div className="flex items-center cursor-pointer space-x-2 text-black transition">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="65"
  viewBox="0 0 100 100"
>
  <circle cx="50" cy="50" r="40" fill="#f39c12" />
  <text x="50%" y="50%" text-anchor="middle" dy=".0em" font-size="32" fill="#fff">
    WY
  </text>
  <text x="50%" y="65%" text-anchor="middle" dy=".4em" font-size="20" fill="#fff">
    Blog
  </text>
</svg>
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">
            <Link href="about">
              <div className="flex items-center">
                <FaInfoCircle /> <h1 className="ml-2">About</h1>
              </div>
            </Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="contact">
              <div className="flex items-center">
                <FaEnvelope /> <h1 className="ml-2">Contact</h1>
              </div>
            </Link>
          </li>
          <li>
            {token?.token ? (
              <div className="flex space-x-4">
                <div className="flex my-auto relative">
                  <BsFillPersonFill
                    onClick={toggleDiv}
                    className="text-2xl text-green-500 hover:text-black cursor-pointer"
                  />
                  {isOpen && (
                    <div className="absolute top-8 flex flex-col py-4 mx-auto  right-0 w-44 bg-white p-8 rounded-lg shadow-lg">
                      <div className="cursor-default flex items-center">
                        <BsFillPersonFill />
                        <p className="ml-2">
                          {firstName} {lastName}
                        </p>
                      </div>
                      <Link href="my-blog">
                        <div className="flex items-center">
                          <FaBlog /> <h1 className="ml-2">My Blogs</h1>
                        </div>
                      </Link>
                      <Link href="add-blog">
                        <div className="flex items-center">
                          <FaPlus /> <h3 className="ml-2">Add Blog</h3>
                        </div>
                      </Link>
                      <Link href="settings">
                        <div className="flex items-center">
                          <FaCog /> <h3 className="ml-2">Settings</h3>
                        </div>
                      </Link>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={tokenDelete}
                      >
                        <div className="flex items-center">
                          <FaSignOutAlt /> <span className="ml-2">Logout</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link href="login">
                <div className="flex items-center">
                  <BsFillPersonFill /> <h1 className="ml-2">Login</h1>
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
