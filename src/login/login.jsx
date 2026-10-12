import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
const Login = () => {
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

            {/* Login Card */}
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
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form
                    className="mt-8 space-y-5"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        console.log("Submit clicked");

                        try {
                            const response = await axios.post(
                                "http://localhost:5000/api/login",
                                {
                                    username,
                                    password
                                }
                            );

                            console.log("Backend response:", response.data);
                            if(response.data.message=="Login successful"){
                                console.log("hello");
                                navigate("/home")
                            }
                            else{
                                alert(response.data.message);
                            }

                        } catch (error) {
                            console.error("Login error:", error);
                        } finally{
                        }
                    }}
                >

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-200"
                        >
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            name="username"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="block w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">

                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-200"
                            >
                                Password
                            </label>

                            <a
                                href="#"
                                className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                            >
                                Forgot password?
                            </a>

                        </div>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            className="block w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/30"
                        />

                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-400"
                        >
                            Remember me
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        className="flex w-full items-center justify-center rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
                    >
                        Sign in
                    </button>

                </form>

                {/* Divider */}
                <div className="my-7 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10"></div>

                    <span className="text-xs text-gray-500">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                {/* Google Login */}
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/[0.07]"
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#4285F4"
                            d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64Z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.44 1.15-4.06 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.1A12 12 0 0 0 12 24Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.26 14.29A7.2 7.2 0 0 1 4.88 12c0-.79.14-1.56.38-2.29V6.61H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.39l4-3.1Z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 4.76c1.76 0 3.34.61 4.59 1.8l3.43-3.43C17.94 1.16 15.24 0 12 0A12 12 0 0 0 1.26 6.61l4 3.1C6.21 6.87 8.87 4.76 12 4.76Z"
                        />
                    </svg>

                    Continue with Google
                </button>

                {/* Register */}
                <p className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account?{" "}

                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="font-semibold text-indigo-400 transition hover:text-indigo-300"
                    >
                        Create an account
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

export default Login;