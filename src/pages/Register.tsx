import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify"
import {registerUser} from "../utils/utils.ts"


const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(form);
      toast.success("Registration successful!")
      navigate("/login"); // if using react-router
    } catch (err) {
      console.error(err);
      toast.error("Registration failed!")
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

          <p className="mt-2 text-sm text-slate-500">
            Register to manage your tasks
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:border-slate-900">
              <FaUser className="text-slate-500" />

              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

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

        

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?
          <span
            className="ml-1 cursor-pointer font-semibold text-slate-900 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

