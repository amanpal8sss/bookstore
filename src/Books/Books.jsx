import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Allbooks from "../components/Allbooks";
import list from "../assets/list.json";

export default function Books() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Allbooks />
      </div>

      <Footer />
    </>
  );
}
