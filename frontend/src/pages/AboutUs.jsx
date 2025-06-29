import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen px-6 sm:px-10 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-100 mb-4">
            About Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Welcome to BookStore – your one-stop destination for discovering stories, knowledge, and imagination.
          </p>
        </div>

        {/* Image & Text Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              BookStore was founded with a simple goal: to make books accessible and enjoyable for everyone. Whether you're a student, a professional, or just a curious reader, we have something for you. We believe in the power of stories to inspire, educate, and transform lives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a vast collection spanning genres, languages, and authors, we aim to bring both classics and modern gems to your fingertips. Our mission is to create a community of readers who cherish learning and literature.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Bookstore"
              className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
            />
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
          <div className="bg-zinc-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-yellow-100 mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To build a digital haven for book lovers where every story finds a reader.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-yellow-100 mb-2">Our Vision</h3>
            <p className="text-gray-400">
              To become India’s most trusted and loved online bookstore.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-yellow-100 mb-2">Our Values</h3>
            <p className="text-gray-400">
              Integrity, Passion for Reading, Customer Satisfaction, and Continuous Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
