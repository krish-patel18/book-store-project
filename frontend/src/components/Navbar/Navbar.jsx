import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  let navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "All Books", to: "/all-books" },
    { name: "Cart", to: "/cart" },
    { name: "Profile", to: "/profile" },
  ];

  // Remove Cart and Profile links if not logged in
  if (!isLoggedIn) {
    navLinks = navLinks.filter(link => link.name !== "Cart" && link.name !== "Profile");
  }

  return (
    <nav className="w-full bg-zinc-900 text-yellow-100 px-4 sm:px-6 lg:px-20 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-extrabold text-white">
          BOOKS HEAVEN
        </NavLink>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              {link.name}
            </NavLink>
          ))}

          {!isLoggedIn && (
            <>
              <NavLink
                to="/auth?mode=login"
                className="px-4 py-1 rounded border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-zinc-900 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth?mode=signup"
                className="px-4 py-1 rounded bg-yellow-300 text-zinc-900 hover:bg-yellow-400 transition"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 px-2 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="block text-base hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {!isLoggedIn && (
            <>
              <NavLink
                to="/auth?mode=login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-zinc-900 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth?mode=signup"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded bg-yellow-300 text-black hover:text-white transition"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
