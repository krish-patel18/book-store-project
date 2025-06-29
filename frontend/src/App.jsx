import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Cart from "./pages/cart";
import Profile from "./pages/Profile";
import AuthForm from "./pages/AuthForm";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/view-book-details/:id" element={<ViewBookDetails/>} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
        <Footer />
     
    </div>
  );
};

export default App;
