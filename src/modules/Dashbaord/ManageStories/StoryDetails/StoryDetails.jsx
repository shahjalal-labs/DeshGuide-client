import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FacebookShareButton, FacebookIcon } from "react-share";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../shared/Layout/Spinner";

const StoryDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const shareUrl = window.location.href;
  console.log(shareUrl, "shareurl StoryDetails.jsx", 13);

  const {
    data: story,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`stories/${id}`);
      return res.data.data;
    },
    retry: 1,
  });

  const handleShareClick = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to share this story",
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
        background: "#1e1b2d",
        color: "#e2e8f0",
      });
    }
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to load story details",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
        background: "#1e1b2d",
        color: "#e2e8f0",
      });
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Story Not Found</h2>
          <p className="text-gray-400">
            The requested story could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e1b2d] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Stories
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              <img src={story.images[0]} className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white">{story.title}</h1>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {story.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-indigo-400/30 hover:border-indigo-400 transition-all"
                >
                  <img src={image} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Story details */}
          <div>
            <div className="bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] rounded-2xl p-8 border border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.2)]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      story.userPhoto || "https://avatar.iran.liara.run/public"
                    }
                    className="w-12 h-12 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="font-semibold text-indigo-300">
                      {story.userName}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {new Date(story.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div onClick={handleShareClick}>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={`Check out this travel story: ${story.title}`}
                    disabled={!user}
                  >
                    <FacebookIcon
                      size={36}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </FacebookShareButton>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {story.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-indigo-500/20">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm">
                    Travel
                  </span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                    Adventure
                  </span>
                  <span className="px-3 py-1 bg-sky-900/50 text-sky-300 rounded-full text-sm">
                    Culture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryDetails;
