"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { FaBlog, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useStore } from "@/stores";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


interface UserMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, closeMenu }) => {
  const { deleteUser } = useStore.getState();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { user } = useStore();
  const router = useRouter();

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
    deleteUser(); 
    router.push("/");
    toast.info("You have been successfully logged out!", {
      position: "top-center",
      autoClose: 3000, 
    });
  };
  
  return (
    <div ref={menuRef} className={`user-menu ${isOpen ? "open" : ""}`}>
      {/* <div className="absolute top-0 left-0 w-full h-full  opacity-25"></div> */}
      <div className="absolute top-8 flex flex-col py-4 mx-auto right-0 w-44  p-8 rounded-lg shadow-lg">
        <div className="cursor-default flex items-center">
          <BsFillPersonFill className="text-emerald-400" />
          <p className="ml-2">
            {user.firstName} {user.lastName}
          </p>
        </div>
        <Link href="/my-blog" onClick={closeMenu}>
          <div className="flex items-center">
            <FaBlog className="text-orange-400" />{" "}
            <h1 className="ml-2">My Blogs</h1>
          </div>
        </Link>
        <Link href="/add-blog" onClick={closeMenu}>
          <div className="flex items-center">
            <FaPlus className="text-orange-400" />{" "}
            <h3 className="ml-2">Add Blog</h3>
          </div>
        </Link>
        <Link href="/settings" onClick={closeMenu}>
          <div className="flex items-center">
            <FaCog className="text-orange-400" />{" "}
            <h3 className="ml-2">Settings</h3>
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
