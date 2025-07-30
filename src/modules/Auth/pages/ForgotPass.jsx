import { motion } from "framer-motion";
import { Link } from "react-router";
import { leftToRight, rightToLeft } from "../../../animation/motion";
import { Input } from "../../shared/ui";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 gap-10 max-lg:flex-col-reverse bg-[#0f172a]">
      {/* Left Image */}
      <motion.div className="flex-1 max-w-[400px]" {...leftToRight}>
        <img
          className="rounded-xl shadow-2xl pulse-glow"
          src="https://images.deepai.org/art-image/3a37098281184deeb6636ac5c7b47257/a-calm-and-hopeful-scene-of-a-person-sitting-at-a-des.jpg"
          alt="Forgot Password Visual"
        />
      </motion.div>

      {/* Form Side */}
      <motion.div className="flex justify-center flex-1" {...rightToLeft}>
        <form className="w-full max-w-sm rounded-xl p-6 sm:p-8 backdrop-blur-sm bg-[#1e293b]/60 glow-border shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 glow-text">
            Forgot Password?
          </h2>

          <p className="text-sm text-gray-300 text-center mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {/* Email Input */}
          <Input label="Email" type="email" required className="text-white" />

          {/* Submit */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full glow-effect hover:glow-effect transition-all duration-300"
            >
              Send Reset Link
            </button>
          </div>

          {/* Signin Link */}
          <p className="text-center mt-6 text-sm text-gray-400">
            Remember your password?{" "}
            <Link
              to="/auth/signin"
              className="link link-primary glow-text hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
