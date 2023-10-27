"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useStore } from "@/stores";

const Setting = () => {
  const [domLoaded, setDomLoaded] = useState<boolean>();
  const { user } = useStore();

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  if (!domLoaded) {
    return null;
  }

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="w-11/2 bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="space-y-6 flex">
          <div className="cursor-default flex flex-col items-center">
            <div className="flex items-center justify-center">
              <label className="block text-lg font-medium">First Name:</label>
              <p className="font-medium ml-2"> {user.firstName}</p>
            </div>
            <div className="flex  items-center">
              <label className="block text-lg  font-medium">Last Name:</label>
              <p className="font-medium ml-2">{user.lastName}</p>
            </div>
            <div className="flex py-4">
              <Link href={`/user-update/`}>
                <button className="bg-blue-500 text-white px-4 py-2 w-40 rounded-lg hover:bg-blue-400 transition text-lg">
                  UPDATE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
