// import { FaUserCircle } from "react-icons/fa";
// import {logout} from "../utils/utils"
// import {toast} from "react-toastify"
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import type { UserDetails } from "../utils/userapi";
// import  { getUserProfile } from "../utils/userapi";


// const UserProfile = () => {
//   const [isUpdateUser, setIsUpdateProfile] = useState<boolean>(false);
//   const usenavigate = useNavigate();
//   const [userProfile , setUserProfile] = useState<UserDetails>();

//   useEffect(() => {
//     const users = async () => {
//       try{
//         const userData = await getUserProfile()
//         setUserProfile(userData);
//         // toast.success("Successfully get the profile")
//       }catch {
//         toast.error("Not fatched profile")
//         return
//       }
//     }
//     users();
    

//   }, [])


//   const handleLogout = async () => {
//       try {
//         await logout();
//         localStorage.removeItem("token");
//         localStorage.removeItem("refreshToken");
//         // redirect to login page
//         toast.success("Logout Suceessfull ")
//         usenavigate("/login")
//       } catch (error) {
//         console.error("Logout failed:", error);
//         toast.error("Logout failed:")

//       }
//     };


    

//   return (

    

//     <>
//       <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-slate-100 to-yellow-50 p-4">
//         <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-xl">
//           {/* Header */}
//           <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
//             {/* Profile */}
//             <div className="flex items-center gap-4">
//               <FaUserCircle size={72} className="text-slate-700" />

//               <div>
//                 <h1 className="text-2xl font-bold text-slate-800">
//                   {userProfile?.fullName}
//                 </h1>

//                 <p className="mt-1 text-sm text-slate-500">Designation : {userProfile?.designation === "ROLE_USER" ? "User" : 'NA/Designation'}</p>

//                 <p className="text-sm text-slate-400">{userProfile?.email}</p>
//               </div>
//             </div>

//             {/* Button */}
//             <button onClick={() => setIsUpdateProfile(!isUpdateUser)}  className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
//               Update Profile
//             </button>
//           </div>
//           {/* Details */}
//         <div className="mt-6 grid gap-5 md:grid-cols-2">
//           {/* Full Name */}
//           <div>
//             <p className="text-sm font-medium text-slate-500">Full Name</p>
//             <h2 className="mt-1 text-base font-semibold text-slate-800">
//               {userProfile?.fullName}
//             </h2>
//           </div>

//           {/* Email */}
//           <div>
//             <p className="text-sm font-medium text-slate-500">Email</p>
//             <p className="mt-1 text-base text-slate-800">
//               {userProfile?.email}
//             </p>
//           </div>

//           {/* Phone */}
//           <div>
//             <p className="text-sm font-medium text-slate-500">Phone</p>
//             <p className="mt-1 text-base text-slate-800">
//               {userProfile?.phone}
//             </p>
//           </div>

//           {/* Location */}
//           <div>
//             <p className="text-sm font-medium text-slate-500">Location</p>
//             <p className="mt-1 text-base text-slate-800">
//               {userProfile?.location}
//             </p>
//           </div>

//           {/* Joined */}
//           <div className="md:col-span-2">
//             <p className="text-sm font-medium text-slate-500">Joined</p>
//             <p className="mt-1 text-base text-slate-800">
//               {userProfile?.createdAt?.split("T")[0]}
//             </p>
//           </div>
//         </div>

//         {/* Bio */}
//         <div className="mt-5">
//           <p className="text-sm font-medium text-slate-500">Bio</p>
//           <p className="mt-1 leading-7 text-slate-700">
//             {userProfile?.bio}
//           </p>
//         </div>


//           {/* Logout */}
//           <div className="mt-6 flex justify-center">
//             <button onClick={handleLogout} className="rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* update profile */}
// {isUpdateUser && (
//   <div className="fixed inset-0 z-50 bg-black/70 py-5 flex items-center justify-center p-4">
//     <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
//       <div className="bg-white rounded-md shadow-xl flex flex-col max-h-[90vh]">
        
//         {/* Modal Header */}
//         <div className="p-6 pb-3 border-b border-stone-200">
//           <h2 className="font-bold text-xl text-slate-800">
//             Update Profile
//           </h2>
//         </div>

//         {/* Modal Body (Scrollable if content overflows) */}
//         <div className="p-6 overflow-y-auto space-y-4 flex-1">
//           <form className="space-y-4">
            
//             {/* Full Name */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600"
//                 placeholder="Full Name"
//               />
//             </div>

//             {/* Email */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700">Email</label>
//               <input
//                 type="text"
//                 name="email"
//                 readOnly
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600 bg-gray-100 cursor-not-allowed text-gray-500"
//                 placeholder="Email"
//               />
//             </div>

//             {/* Phone */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600"
//                 placeholder="Phone"
//               />
//             </div>

//             {/* Location */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600"
//                 placeholder="Location"
//               />
//             </div>

//             {/* Joined Date */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700">Joined Date</label>
//               <input
//                 type="text"
//                 name="joinedDate"
//                 readOnly
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600 bg-gray-100 cursor-not-allowed text-gray-500"
//                 placeholder="Joined Date"
//               />
//             </div>

//             {/* Bio */}
//             <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
//               <label className="sm:w-48 text-sm font-medium text-slate-700 pt-1">Bio</label>
//               <textarea
//                 name="bio"
//                 rows={4}
//                 className="border border-slate-200 flex-1 text-sm p-2.5 rounded-md outline-emerald-600 resize-none"
//                 placeholder="Write something about yourself..."
//               />
//             </div>
//           </form>
//         </div>

//         {/* Modal Footer / Action Buttons */}
//         <div className="p-6 pt-4 border-t border-stone-200 flex items-center justify-end gap-3 bg-stone-50 rounded-b-md">
//           <button
//             type="button"
//             onClick={() => setIsUpdateProfile(!isUpdateUser)}
//             className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors duration-200"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             onClick={() => {/* Add your submit/save function here */}}
//             className="px-5 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-md shadow-sm transition-colors duration-200"
//           >
//             Save Changes
//           </button>
//         </div>

//       </div>
//     </div>
//   </div>
// )}


      

//     </>
//   );
// };

// export default UserProfile;

import { logout } from "../utils/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { UserDetails } from "../utils/userapi";
import { getUserProfile, updateUserProfile } from "../utils/userapi";
import type { UpdateUserD } from "../utils/userapi";

const UserProfile = () => {
  const [isUpdateUser, setIsUpdateProfile] = useState<boolean>(false);

  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<UserDetails | null>(null);

  // Controlled form state
  const [formData, setFormData] = useState<UpdateUserD>({
    fullName: "",
    phone: "",
    location: "",
    bio: "",
  });

  // Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile();

        setUserProfile(userData);

        // Set form state
        setFormData({
          fullName: userData.fullName || "",
          phone: userData.phone || "",
          location: userData.location || "",
          bio: userData.bio || "",
        });
      } catch {
        toast.error("Failed to fetch profile");
      }
    };

    fetchUser();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await logout();

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      toast.success("Logout successful");

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  // Update profile
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateUserProfile(formData);

      toast.success("Profile updated successfully!");

      // Update UI instantly
      setUserProfile((prev) =>
        prev
          ? {
              ...prev,
              fullName: formData.fullName,
              phone: formData.phone,
              location: formData.location,
              bio: formData.bio,
            }
          : prev
      );

      setIsUpdateProfile(false);

      // Optional refetch
      const updatedProfile = await getUserProfile();

      setUserProfile(updatedProfile);

      setFormData({
        fullName: updatedProfile.fullName || "",
        phone: updatedProfile.phone || "",
        location: updatedProfile.location || "",
        bio: updatedProfile.bio || "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update profile"
      );
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-slate-100 to-yellow-50 p-4">
        <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-xl">
          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                  src={`https://eu.ui-avatars.com/api/?name=${userProfile?.fullName}&size=50`}
                  alt={userProfile?.fullName}
                />

              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  {userProfile?.fullName}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Designation:{" "}
                  {userProfile?.designation === "ROLE_USER"
                    ? "User"
                    : "NA/Designation"}
                </p>

                <p className="text-sm text-slate-400">
                  {userProfile?.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsUpdateProfile(true)}
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>

          {/* Details */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Full Name
              </p>

              <h2 className="mt-1 text-base font-semibold text-slate-800">
                {userProfile?.fullName}
              </h2>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Email</p>

              <p className="mt-1 text-base text-slate-800">
                {userProfile?.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Phone</p>

              <p className="mt-1 text-base text-slate-800">
                {userProfile?.phone}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Location</p>

              <p className="mt-1 text-base text-slate-800">
                {userProfile?.location}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm font-medium text-slate-500">Joined</p>

              <p className="mt-1 text-base text-slate-800">
                {userProfile?.createdAt?.split("T")[0]}
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-5">
            <p className="text-sm font-medium text-slate-500">Bio</p>

            <p className="mt-1 leading-7 text-slate-700">
              {userProfile?.bio}
            </p>
          </div>

          {/* Logout */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isUpdateUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 py-5">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl"
          >
            <div className="flex max-h-[90vh] flex-col rounded-md bg-white shadow-xl">
              {/* Header */}
              <div className="border-b border-stone-200 p-6 pb-3">
                <h2 className="text-xl font-bold text-slate-800">
                  Update Profile
                </h2>
              </div>

              {/* Form */}
              <form
                id="update-profile-form"
                onSubmit={handleSubmit}
                className="flex-1 space-y-4 overflow-y-auto p-6"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <label className="sm:w-48 text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="flex-1 rounded-md border border-slate-200 p-2.5 text-sm outline-emerald-600"
                    placeholder="Full Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <label className="sm:w-48 text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="text"
                    value={userProfile?.email || ""}
                    readOnly
                    className="flex-1 cursor-not-allowed rounded-md border border-slate-200 bg-gray-100 p-2.5 text-sm text-gray-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <label className="sm:w-48 text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="flex-1 rounded-md border border-slate-200 p-2.5 text-sm outline-emerald-600"
                    placeholder="Phone"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <label className="sm:w-48 text-sm font-medium text-slate-700">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                    className="flex-1 rounded-md border border-slate-200 p-2.5 text-sm outline-emerald-600"
                    placeholder="Location"
                  />
                </div>

                {/* Joined */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <label className="sm:w-48 text-sm font-medium text-slate-700">
                    Joined Date
                  </label>

                  <input
                    type="text"
                    value={userProfile?.createdAt?.split("T")[0] || ""}
                    readOnly
                    className="flex-1 cursor-not-allowed rounded-md border border-slate-200 bg-gray-100 p-2.5 text-sm text-gray-500"
                  />
                </div>

                {/* Bio */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                  <label className="sm:w-48 pt-1 text-sm font-medium text-slate-700">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bio: e.target.value,
                      })
                    }
                    className="flex-1 resize-none rounded-md border border-slate-200 p-2.5 text-sm outline-emerald-600"
                    placeholder="Write something about yourself..."
                  />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 rounded-b-md border-t border-stone-200 bg-stone-50 p-6 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsUpdateProfile(false)}
                    className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-800"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-md bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 active:bg-emerald-800"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;