import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIslogin] = useState(false);
  const [num, setNum] = useState(0);


  return (<div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12 relative overflow-hidden">

    {/* Background decoration */}
    <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"></div>

    <div className="relative z-10 w-full max-w-md">

      {/* Register Card */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/20">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Company Logo"
              className="h-7 w-7"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Get started by creating your new account
          </p>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="mt-8 space-y-5"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("Submit clicked");

            try {
              const response = await axios.post(
                "http://localhost:5000/api/register",
                {
                  username,
                  password
                }
              );

              console.log("Backend response:", response.data);
              if (response.data.success) {
                navigate("/home")
              }else{
                alert(response.data.message);
              }

            } catch (error) {
              console.error("Login error:", error);
            } finally {
            }
          }}
        >

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Username
            </label>

            <input
              id="name"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className="block w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              required
              autoComplete="new-password"
              placeholder="Create a strong password"
              className="block w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>



          {/* Register Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
          >
            Create account
          </button>

        </form>

        {/* Login */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            Sign in
          </button>
        </p>

      </div>

      {/* Footer */}
      <p className="mt-6 text-center text-xs text-gray-600">
        © 2026 Your Company. All rights reserved.
      </p>

    </div>
  </div>
  )
}

export default Register;