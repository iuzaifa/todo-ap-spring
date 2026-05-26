import { FaUserCircle } from "react-icons/fa";
import {logout} from "../utils/utils"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const usenavigate = useNavigate();
  const user = {
    name: "Abu Huzaifa",
    role: "Java Full Stack Developer",
    email: "huzaifa@gmail.com",
    phone: "+91 9876543210",
    location: "Delhi, India",
    joined: "January 2026",
    bio: "Focused on building scalable backend systems, secure authentication flows, and modern frontend interfaces using Spring Boot & React.",
  };

  const handleLogout = async () => {
      try {
        await logout();
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        // redirect to login page
        toast.success("Logout Suceessfull ")
        usenavigate("/login")
      } catch (error) {
        console.error("Logout failed:", error);
        toast.error("Logout failed:")

      }
    };

  return (

    

    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-slate-100 to-yellow-50 p-4">
        <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-xl">
          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <FaUserCircle size={72} className="text-slate-700" />

              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  {user.name}
                </h1>

                <p className="mt-1 text-sm text-slate-500">{user.role}</p>

                <p className="text-sm text-slate-400">{user.email}</p>
              </div>
            </div>

            {/* Button */}
            <button className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
              Update Profile
            </button>
          </div>
          {/* Details */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <p className="text-sm font-medium text-slate-500">Full Name</p>
            <h2 className="mt-1 text-base font-semibold text-slate-800">
              {user.name}
            </h2>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm font-medium text-slate-500">Email</p>
            <p className="mt-1 text-base text-slate-800">
              {user.email}
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="text-sm font-medium text-slate-500">Phone</p>
            <p className="mt-1 text-base text-slate-800">
              {user.phone}
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm font-medium text-slate-500">Location</p>
            <p className="mt-1 text-base text-slate-800">
              {user.location}
            </p>
          </div>

          {/* Joined */}
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-slate-500">Joined</p>
            <p className="mt-1 text-base text-slate-800">
              {user.joined}
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5">
          <p className="text-sm font-medium text-slate-500">Bio</p>
          <p className="mt-1 leading-7 text-slate-700">
            {user.bio}
          </p>
        </div>


          {/* Logout */}
          <div className="mt-6 flex justify-center">
            <button onClick={handleLogout} className="rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default UserProfile;