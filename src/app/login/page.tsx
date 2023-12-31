"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useStore } from "@/stores";
import { useRouter } from "next/navigation";
import { FaHandPaper} from "react-icons/fa"

const beUrl= process.env.BE_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useStore.getState();
  const router = useRouter()
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${beUrl}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        updateUser(data);
        toast.success(
          <p className="flex">
            Hello {data.firstName} {data.lastName} <FaHandPaper className="text-yellow-600 my-auto ml-2" />
          </p>,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        router.push("/");
      } else {
        toast.error("The email or password you entered is incorrect.", {
          position: "top-center",
          autoClose: 3000, 
        });
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat flex-1 flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/1600/900")' }}
    >
      <div className="max-w-md w-10/12 mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <p className="flex justify-end p-2">
            <Link href="/register">Click here to register</Link>
          </p>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
