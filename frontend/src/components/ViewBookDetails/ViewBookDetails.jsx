// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../Loader/Loader";

// const ViewBookDetails = () => {
//   const { id } = useParams();
//   const [Data, setData] = useState();
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         `http://localhost:1000/api/v1/get-book-by-id/${ id }`
//       );
//       setData(response.data.data);
//     };
//     fetch();
//   }, []);

//   return (
//     <div className="px-12 py-8 bg-zinc-900 flex gap-8">
//       <div className="bg-zinc-800 rounded p-4 h-[88vh]"></div>
//       <div className="p-4"></div>
//     </div>
//   );
// };

// export default ViewBookDetails;


import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1000/api/v1/get-book-by-id/${id}`
        );
        setData(response.data.data);
      } catch (err) {
        console.error("Failed to fetch book:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  if (loading) return <Loader />;
  if (!Data) return <div className="text-white text-center mt-10">Book not found</div>;

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-10 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
        {/* Left - Book Image */}
        <div className="bg-zinc-800 rounded-xl p-6 flex items-center justify-center shadow-md h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <img
            src={Data.url}
            alt={Data.title}
            className="h-full w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Right - Book Info (Vertically Centered) */}
        <div className="flex items-center h-full">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-yellow-100">{Data.title}</h1>
              <p className="text-lg text-gray-400">
                By <span className="text-white">{Data.author}</span>
              </p>
            </div>

            <div className="text-2xl font-bold text-green-400">₹{Data.price}</div>

            <div className="pt-4 border-t border-zinc-700">
              <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
              <p className="text-gray-300 leading-relaxed">{Data.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-zinc-800 px-5 py-4 rounded-lg shadow">
                <p className="text-sm text-gray-400 mb-1">Language</p>
                <p className="text-white font-medium">{Data.language}</p>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition duration-200 shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookDetails;


