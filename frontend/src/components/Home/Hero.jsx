import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-zinc-900 px-4 sm:px-6 lg:px-20 md:pt-6 pb-12 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-16 ">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-100 leading-tight">
            Discover Your Next Great Read
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-zinc-300 max-w-xl mx-auto lg:mx-0">
            Uncover captivating stories, enriching knowledge, and endless
            inspiration in our curated collection of books.
          </p>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-yellow-100 text-base sm:text-lg font-semibold border border-yellow-100 px-6 sm:px-10 py-3 rounded-full hover:bg-yellow-100 hover:text-zinc-900 transition-all duration-300">
              <Link to="/all-books">Discover Books</Link>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content  */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}>
          <img
            src="https://cdn.dribbble.com/userupload/4488163/file/original-10106973d919ba6b19473d47fc07bb7c.png?resize=1600x1200&vertical=center"
            alt="Books Illustration"
            className="w-[90%] sm:w-[80%] md:w-[85%] lg:w-full max-w-[600px] rounded-2xl shadow-2xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
