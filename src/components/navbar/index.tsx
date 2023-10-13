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
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 w-full">
      <div className="mx-auto max-w-7xl w-11/12 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer space-x-2 text-white hover:text-blue-300 transition">
            <FaHome className="text-3xl" />
            <span className="text-2xl font-bold">Wy Blog</span>
          </div>
        </Link>
        <div className="flex space-x-4">
          <CustomLink
            href="/about"
            label="About"
            icon={<FaInfoCircle className="text-xl" />}
          />
          <CustomLink
            href="/contact"
            label="Contact"
            icon={<FaEnvelope className="text-xl" />}
          />
          {token?.token ? (
            <div className="flex space-x-4">
              <div className="flex my-auto relative">
                <BsFillPersonFill
                  onClick={toggleDiv}
                  className="text-2xl text-green-500 hover:text-white cursor-pointer"
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
            <CustomLink
              href="/login"
              label="Login"
              icon={<BsFillPersonFill className="text-xl" />}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

const CustomLink: React.FC<{
  href: string;
  label: string;
  icon: JSX.Element;
}> = ({ href, label, icon }) => {
  return (
    <Link href={href}>
      <div className="flex items-center cursor-pointer space-x-2 text-white hover:text-blue-300 transition">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
};

export default Navbar;
