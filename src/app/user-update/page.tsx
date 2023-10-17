"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const UserUpdate = () => {
  const [localFirstName, setLocalFirstName] = useState<string>("");
  const [localLastName, setLocalLastName] = useState<string>("");
  const [token, setToken] = useState<string | null>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFirstName = window.localStorage.getItem("firstName");
      const storedLastName = window.localStorage.getItem("lastName");
      const access_token = window.localStorage.getItem("token");

      if (storedFirstName) {
        setLocalFirstName(storedFirstName);
      }

      if (storedLastName) {
        setLocalLastName(storedLastName);
      }

      if (access_token) {
        setToken(access_token);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      firstName: localFirstName,
      lastName: localLastName,
      access_token: token,
    };

    const beUrl = process.env.BE_URL;
    console.log("userupdate", beUrl);

    try {
      await fetch(`${beUrl}user/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem("firstName", data.firstName);
          window.localStorage.setItem("lastName", data.lastName);

          router.push("/settings");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-cover bg-center w-full bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center">
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Update</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium">
              FirstName
            </label>
            <input
              type="text"
              id="firstName" 
              value={localFirstName}
              onChange={(e) => setLocalFirstName(e.target.value)}
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
              value={localLastName}
              onChange={(e) => setLocalLastName(e.target.value)}
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
