import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";

const LIMIT = 6;

const Stories = ({ apiEndpoint }) => {
  const [page, setPage] = useState(1);
  const [allStories, setAllStories] = useState([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["stories", page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${apiEndpoint}?limit=${LIMIT}&page=${page}`,
      );
      return res.data.data;
    },
    keepPreviousData: true,
  });

  // Append new stories to the existing list
  useEffect(() => {
    if (data?.stories) {
      setAllStories((prev) => [...prev, ...data.stories]);
    }
  }, [data]);

  if (isLoading && page === 1) return <Spinner />;

  const totalPages = data?.totalPages || 1;

  return (
    <section
      className="px-4 py-16 bg-[#0f172a] text-white"
      data-aos="fade-up-left"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌌 Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {allStories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {page < totalPages && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="btn btn-soft btn-info rounded-full"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Stories;

/* import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";

const LIMIT = 6;

const Stories = ({ apiEndpoint }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["stories", page],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${apiEndpoint}?limit=${LIMIT}&page=${page}`,
      );
      return res.data.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Spinner />;

  const { stories, totalPages } = data;

  return (
    <section
      className="px-4 py-16 bg-[#0f172a] text-white"
      data-aos="fade-up-left"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌌 Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories?.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {page < totalPages && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="btn btn-soft btn-info rounded-full"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Stories;
 */
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
