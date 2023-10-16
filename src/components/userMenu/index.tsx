"use client";
import { useRef, MouseEvent, useEffect } from "react";
import Link from "next/link";
import { FaBlog, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

interface UserMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

let firstName: string | null = "";
let lastName: string | null = "";
if (typeof window !== "undefined") {
  firstName = window.localStorage.getItem("firstName");
  lastName = window.localStorage.getItem("lastName");
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, closeMenu }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  const tokenDelete = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div ref={menuRef} className={`user-menu ${isOpen ? "open" : ""}`}>
      {/* <div className="absolute top-0 left-0 w-full h-full  opacity-25"></div> */}
      <div className="absolute top-8 flex flex-col py-4 mx-auto right-0 w-44 bg-white p-8 rounded-lg shadow-lg">
        <div className="cursor-default flex items-center">
          <BsFillPersonFill />
          <p className="ml-2">
            {firstName} {lastName}
          </p>
        </div>
        <Link href="/my-blog" onClick={closeMenu}>
          <div className="flex items-center">
            <FaBlog /> <h1 className="ml-2">My Blogs</h1>
          </div>
        </Link>
        <Link href="/add-blog" onClick={closeMenu}>
          <div className="flex items-center">
            <FaPlus /> <h3 className="ml-2">Add Blog</h3>
          </div>
        </Link>
        <Link href="/settings" onClick={closeMenu}>
          <div className="flex items-center">
            <FaCog /> <h3 className="ml-2">Settings</h3>
          </div>
        </Link>
        <button className="text-red-500 cursor-pointer" onClick={tokenDelete}>
          <div className="flex items-center">
            <FaSignOutAlt /> <span className="ml-2">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
