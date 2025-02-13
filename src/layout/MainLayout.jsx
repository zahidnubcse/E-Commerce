import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = () => {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer/>
        <Navbar />
        <SearchBar />
        <Outlet /> {/* This is where child routes will render */}
        
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
