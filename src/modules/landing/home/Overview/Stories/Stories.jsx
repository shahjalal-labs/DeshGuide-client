import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router";
import "aos/dist/aos.css";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";

const Stories = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["all-stories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stories");
      return res.data;
    },
  });

  const handleShare = (story) => {
    if (!user) {
      return Swal.fire({
        icon: "warning",
        title: "Please login to share stories",
        background: "#0f172a",
        color: "#fff",
      });
    }

    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.description,
        url: `${location.origin}/stories/${story._id}`,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Sharing not supported",
        text: "Your browser doesn't support native sharing. Try copying the URL manually.",
        background: "#0f172a",
        color: "#fff",
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white pt-10 px-4 md:px-10">
      <h2
        data-aos="fade-down"
        className="text-3xl md:text-5xl font-bold text-center glow-text mb-12"
      >
        Travelers' Stories
      </h2>

      {isLoading ? (
        <div className="flex-center py-20">
          <span className="loading loading-bars loading-lg text-info"></span>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <motion.div
              key={story._id}
              data-aos="fade-up"
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-[#1e293b] shadow-md glow-border overflow-hidden flex flex-col justify-between"
            >
              <img
                src={
                  story.images[0] || "https://i.ibb.co/1zZxZ9x/placeholder.jpg"
                }
                alt={story.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold glow-text">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {story.description.slice(0, 100)}...
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/stories/${story._id}`}
                    className="btn btn-sm bg-cyan-600 hover:bg-cyan-700 text-white glow-border"
                  >
                    Read More
                  </Link>
                  <button
                    onClick={() => handleShare(story)}
                    className="pulse-glow jhilimili-glow glow-border hover:glow-effect flex items-center gap-2 px-3 py-1 rounded text-sm text-white bg-indigo-600"
                  >
                    <span className="material-symbols-outlined text-base">
                      share
                    </span>
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Stories;

/* import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";
import { Link, useLocation } from "react-router";

const Stories = ({ apiEndpoint }) => {
  const location = useLocation();
  const isStoriesPage = location.pathname.toLowerCase().includes("all-stories");
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosInstance.get(apiEndpoint);
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section
      className="px-4 py-16 bg-[#0f172a] text-white"
      data-aos="fade-up-left"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌌 Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
      {isStoriesPage || (
        <div className="flex-container mt-8">
          <Link
            className="btn btn-soft btn-info rounded-full mt-3 "
            to="/all-stories"
          >
            View All Stories
          </Link>
        </div>
      )}
    </section>
  );
};

export default Stories; */
