"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useStore } from "@/stores";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const { register } = useStore.getState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 3000, 
      });
      return;
    }

    if (password.length < 8) {
      toast.error("The password must be at least 8 characters long.", {
        position: "top-center",
        autoClose: 3000, 
      });
      return;
    }

    const nameRegex = /^[A-Za-z]{2,}$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      toast.error(
        "The first name and last name fields must contain at least two letters and cannot contain numbers.", {
          position: "top-center",
          autoClose: 3000, 
        }
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("The passwords do not match. Please check again.", {
        position: "top-center",
        autoClose: 3000, 
      });
      return;
    }

    try {
      const response = await register({ email, password, firstName, lastName });
      if ( response.status === "email") {
        toast.error("This email is already registered. Please use a different email address.", {
          position: "top-center",
          autoClose: 3000, 
        });
      } else if (response.status === "success") {
        toast.success("You have successfully registered.", {
          position: "top-center",
          autoClose: 3000, 
        });
        router.push("/login");
      } else {
        toast.error("An error occurred. Please try again.", {
          position: "top-center",
          autoClose: 3000, 
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 3000, 
      });
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="max-w-md w-10/12 mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-600 font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.replace(/\d+/g, ""))}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-600 font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.replace(/\d+/g, ""))}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          <p className="flex justify-end p-2">
            <Link href="/login">Click here to login</Link>
          </p>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover-bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
