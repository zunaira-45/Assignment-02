import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
    );
  }
