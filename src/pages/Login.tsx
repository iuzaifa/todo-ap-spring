import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {loginUser} from "../utils/utils.ts"
import { toast } from "react-toastify"


const Login = () => {
  
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await loginUser(form);
      // Save JWT in localStorage
      localStorage.setItem("token", result.email); // JWT
      localStorage.setItem("user", result.accessToken); // user email
      toast.success("Login successful!")
      navigate("/board"); // if using react-router
    } catch (err ) {
      console.error(err);
      toast.error("Login failed!")
    }
  };



  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to continue managing tasks
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:border-slate-900">
              <FaEnvelope className="text-slate-500" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:border-slate-900">
              <FaLock className="text-slate-500" />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              disabled
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Forgot Password?
            </button>
          </div>

          {/* Error */}
          

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don&apos;t have an account?
          <span
            className="ml-1 cursor-pointer font-semibold text-slate-900 hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;