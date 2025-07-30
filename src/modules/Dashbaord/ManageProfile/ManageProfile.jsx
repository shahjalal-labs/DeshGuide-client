// import { useQuery } from "@tanstack/react-query";
// import { motion } from "framer-motion";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// // import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import Spinner from "../../shared/Layout/Spinner";
// import { useState } from "react";
// import "dayjs/locale/en";
// import { Link } from "react-router";
// import useUserRole from "../../../hooks/useUserRole";
// import useScrollToTop from "../../../hooks/useScrollToTop";
// import PageIntro from "../../../utils/PageIntro";
// dayjs.extend(relativeTime);
//
// const ManageProfile = () => {
//   useScrollToTop();
//   const axiosSecure = useAxiosSecure();
//   const [showModal, setShowModal] = useState(false);
//   const { userData } = useUserRole();
//
//   const { data: userInfo = {}, isPending } = useQuery({
//     queryKey: ["manage-profile", userData?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/email/${userData?.email}`);
//       // const res = await axiosSecure.get(`/users/email/tourist4@example.com`); emaile for tourist
//       // const res = await axiosSecure.get(`/users/email/4@example.com`); // email for tour guide
//
//       return res.data?.data;
//     },
//     enabled: !!userData?.email,
//   });
//
//   if (isPending)
//     return (
//       <div className="text-center mt-10">
//         <Spinner />
//       </div>
//     );
//
//   const { name, email, photoURL, role, createdAt, last_loggedIn } =
//     userInfo || {};
//
//   const completeness =
//     ([name, email, photoURL].filter(Boolean).length / 3) * 100;
//
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-5xl mx-auto p-6 md:p-10 rounded-xl bg-gradient-to-br from-[#0f1328] to-[#1a1f3b] shadow-xl text-white space-y-6"
//       data-aos="fade-up"
//     >
//       <PageIntro
//         h1={`👋 Welcome back, ${name || "Explorer"}`}
//         p={`You can update your profile details and manage your account.`}
//       />
//       <div className="flex flex-col md:flex-rw gap-6 items-center">
//         <img
//           src={photoURL || "https://avatar.iran.liara.run/public"}
//           alt="User"
//           className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-cyan-700"
//           data-aos="zoom-in"
//         />
//
//         <div className="flex-1 space-y-2">
//           <p className="text-lg text-cyan-300 font-medium">📧 {email}</p>
//           <p className="text-md text-gray-300">
//             🔐 Role: <span className="font-semibold text-cyan-400">{role}</span>
//           </p>
//           <p className="text-md text-gray-400">
//             🕓 Account Created:{" "}
//             <span className="text-green-400">
//               {dayjs(createdAt).format("MMM D, YYYY")} (
//               {dayjs(createdAt).fromNow()})
//             </span>
//           </p>
//           <p className="text-md text-gray-400">
//             🕘 Last Logged In:{" "}
//             <span className="text-yellow-300">
//               {dayjs(last_loggedIn).format("MMM D, YYYY h:mm A")} (
//               {dayjs(last_loggedIn).fromNow()})
//             </span>
//           </p>
//           <p className="text-md text-gray-400">
//             👥 Profile Completeness:{" "}
//             <span
//               className={`font-bold ${
//                 completeness >= 100
//                   ? "text-green-400"
//                   : completeness >= 60
//                     ? "text-yellow-400"
//                     : "text-red-400"
//               }`}
//             >
//               {Math.round(completeness)}%
//             </span>
//           </p>
//         </div>
//       </div>
//
//       {/* Buttons */}
//       <div
//         className="flex flex-col md:flex-row md:justify-center gap-4 mt-6 *:rounded-full *:max-md:max-w-[300px] max-md:*:mx-auto"
//         data-aos="fade-up"
//       >
//         <button
//           className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white pulse-glow"
//           onClick={() => setShowModal(true)}
//         >
//           ✏️ Update Profile
//         </button>
//
//         {role === "tourist" && (
//           <Link
//             to="/dashboard/tourist/join-tour-guide"
//             className="btn btn-outline btn-block md:btn-wide border-emerald-500 text-emerald-300 hover:bg-emerald-600 hover:text-white pulse-glow"
//           >
//             ✨ Join as Tour Guide
//           </Link>
//         )}
//       </div>
//
//       {/* DaisyUI Modal */}
//       {showModal && (
//         <dialog
//           id="update_modal"
//           className="modal modal-open"
//           data-aos="zoom-in"
//         >
//           <div className="modal-box bg-[#1c233d] text-white border border-cyan-600 shadow-xl">
//             <h3 className="font-bold text-lg mb-4">Update Profile Info</h3>
//             <form
//               method="dialog"
//               className="space-y-4"
//               // onSubmit={handleUpdateProfile} // future logic
//             >
//               <input
//                 type="text"
//                 defaultValue={name}
//                 placeholder="Name"
//                 className="input input-bordered input-md w-full bg-[#0f1328] text-white"
//               />
//               <input
//                 type="text"
//                 defaultValue={photoURL}
//                 placeholder="Photo URL"
//                 className="input input-bordered input-md w-full bg-[#0f1328] text-white"
//               />
//               <div className="modal-action">
//                 <button
//                   className="btn bg-cyan-600 text-white hover:bg-cyan-700"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-ghost text-gray-300"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </dialog>
//       )}
//     </motion.div>
//   );
// };
//
// export default ManageProfile;
// -----------------------------------------------------------------------------
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { updateProfile } from "firebase/auth";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../shared/Layout/Spinner";
import "aos/dist/aos.css";

dayjs.extend(relativeTime);

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  const { data: userData, isLoading } = useQuery({
    queryKey: ["manage-profile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${user?.email}`);
      return res.data?.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // 1. Update Firebase
      await updateProfile(user, {
        displayName: data.name,
        photoURL: data.photoURL,
      });

      // 2. Update MongoDB
      const res = await axiosSecure.patch(`/users/${userData?._id}`, {
        name: data.name,
        photoURL: data.photoURL,
      });

      if (res.data?.success) {
        swalSuccessToast({ text: "Profile updated successfully!" });
        queryClient.invalidateQueries(["manage-profile", user?.email]);
        setShowModal(false);
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (err) {
      swalErrorToast({ text: err.message });
    }
  };

  if (isLoading || !userData) return <Spinner />;

  const { name, photoURL, email, role, createdAt, last_loggedIn } = userData;

  return (
    <motion.div
      className="p-4 md:p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">
        👤 Manage Profile
      </h2>

      <div className="bg-[#10192b] rounded-xl p-6 shadow-xl border border-cyan-800/30 pulse-glow">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <img
            src={photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-cyan-600 shadow-md glow-border"
          />
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <p className="text-gray-400">📧 {email}</p>
            <p className="text-gray-400">🧩 Role: {role}</p>
            <p className="text-gray-400">
              🕐 Joined: {dayjs(createdAt).fromNow()}
            </p>
            <p className="text-gray-400">
              🔄 Last Login: {dayjs(last_loggedIn).fromNow()}
            </p>
            <button
              onClick={() => {
                reset({ name, photoURL });
                setShowModal(true);
              }}
              className="btn btn-sm bg-cyan-600 text-white hover:bg-cyan-700 mt-2"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a
          href="/dashboard/join-tour-guide"
          className="btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:from-cyan-600 transition-transform"
        >
          🚀 Join as Tour Guide
        </a>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box bg-[#0f172a] text-white border border-cyan-800">
            <h3 className="font-bold text-lg mb-4">Update Profile</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-cyan-400">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full bg-[#1e293b] text-white"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm text-cyan-400">
                  Photo URL
                </label>
                <input
                  type="text"
                  {...register("photoURL", {
                    required: "Photo URL is required",
                    pattern: {
                      value:
                        /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|svg|gif))$/i,
                      message: "Enter a valid image URL",
                    },
                  })}
                  className="input input-bordered w-full bg-[#1e293b] text-white"
                />
                {errors.photoURL && (
                  <p className="text-red-400 text-sm">
                    {errors.photoURL.message}
                  </p>
                )}
              </div>

              <div className="modal-action">
                <button
                  type="submit"
                  className="btn bg-cyan-600 text-white hover:bg-cyan-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-ghost text-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ManageProfile;
