import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">

        {/* Logo + Social */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">BOOKS HEAVEN</h2>
          <p className="text-sm text-zinc-300 mb-6">
            Your ultimate destination for literary treasures. Discover worlds between pages and let your imagination soar.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow-400 hover:text-zinc-900 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 border-b border-yellow-400 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/all-books" className="hover:text-yellow-400 transition">All Books</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="/login" className="hover:text-yellow-400 transition">Login</a></li>
            <li><a href="/signup" className="hover:text-yellow-400 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 border-b border-yellow-400 inline-block pb-1">Contact Us</h3>
          <div className="space-y-4 text-sm text-zinc-300">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <p>123 Book Street, Literary District, Storyville 10001</p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-yellow-400 mt-1" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-400 mt-1" />
              <p>contact@booksheaven.com</p>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-yellow-400 mt-1" />
              <p>Mon-Fri: 9AM - 8PM<br />Sat-Sun: 10AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-700 mt-12 pt-6 text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} <span className="text-zinc-100 font-semibold">BOOKS HEAVEN</span>. Created by{' '}
        <a href="#" className="text-yellow-400 hover:underline">KRISH</a>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
