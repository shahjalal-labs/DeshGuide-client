import { motion } from "framer-motion";
import { Link } from "react-router";

const StoryCard = ({ story }) => {
  return (
    <div>
      <motion.div
        key={story._id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between h-full min-h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
      >
        <div className="relative group">
          <img
            src={story.images?.[0]}
            alt={story.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 border-b-[4px] border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
              {story.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 p-5 space-y-3">
          <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
            {story.description}
          </p>

          <div className="flex items-center gap-3 pt-4 mt-auto">
            <img
              src={story?.userPhoto || "https://avatar.iran.liara.run/public"}
              className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
            />
            <div>
              <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                {story.userName}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryCard;
