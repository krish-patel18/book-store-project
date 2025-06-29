import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForm({ name: "", address: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (isLogin && (!form.email || !form.password)) ||
      (!isLogin && (!form.name || !form.address || !form.email || !form.password))
    ) {
      toast.error("Please fill in all the required fields!");
      return;
    }
    toast.success(isLogin ? "Login Successful!" : "Signup Successful!");
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-zinc-800 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-yellow-100 mb-8">
          {isLogin ? "Login to BookStore" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows="3"
                  className="w-full px-5 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                ></textarea>
              </div>
            </>
          )}

          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full px-5 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-5 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-8">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-yellow-400 hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        <ToastContainer position="top-right" autoClose={2500} />
      </div>
    </div>
  );
};

export default AuthForm;
