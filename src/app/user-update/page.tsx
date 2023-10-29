"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useStore } from "@/stores";
const beUrl = process.env.BE_URL;

const UserUpdate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { user } = useStore();
  const router = useRouter();
  const { postUpdatedUser } = useStore.getState();

 
  console.log(user);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    if (!user?.id) {
      router.push("/login");
    }
  }, [user?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      access_token: user.token,
    };

    try {
      postUpdatedUser(data);
      console.log("data", data);
      router.push("/settings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="w-11/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Update</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium">
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-medium">
              LastName
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 w-40 rounded-lg hover-bg-blue-400 transition text-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
