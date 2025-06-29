import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  if (!data) return null;

  return (
    <Link to={`/view-book-details/${data._id}`} className="w-full sm:w-[48%] md:w-[32%] lg:w-[23%]">
      <div className="bg-zinc-800 hover:bg-zinc-700 transition duration-300 rounded-2xl p-4 shadow-md flex flex-col h-full">
        <div className="bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center aspect-[3/4]">
          <img
            src={data.url}
            alt={data.title || "Book Cover"}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="mt-4 flex flex-col flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-white line-clamp-2">
            {data.title || "Untitled"}
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-1 font-medium">
            by {data.author || "Unknown Author"}
          </p>
          <p className="text-base md:text-lg text-zinc-200 font-bold mt-2">
            ₹ {data.price || "0.00"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
