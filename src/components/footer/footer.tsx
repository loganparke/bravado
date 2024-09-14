
"use client";
import { FaInstagram } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";

export default function Footer(){
  const scrollToTop = () => {
    console.log('hi')
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scrolling effect
    });
  };
  return (
    <div className="w-full h-[350px] flex justify-center align-center">
    <section className="flex flex-wrap m-auto space-between max-w-[90%]">
      <p className="opacity-0">.</p>
      <div className="flex w-[800px]">
      <a href="/" className="m-auto">HOME</a>
      <a href="/portfolio" className="m-auto">PORTFOLIO</a>
      <a href="/about" className="m-auto">ABOUT</a>
      <a href="/contact" className="m-auto">CONTACT</a>
      <FaInstagram className="m-auto text-3xl cursor-pointer relative"/>
      </div>
      <button className="relative top-20 left-40 " onClick={() => scrollToTop()}>
      <IoArrowUp className="text-3xl cursor-pointer"/></button>
    </section>
    </div>
  )
}