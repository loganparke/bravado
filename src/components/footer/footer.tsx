import { FaInstagram } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";

export default function Footer(){
  return (
    <div className="w-full">
    <section className="flex m-auto space-between max-w-[90%]">
      <p className="opacity-0">.</p>
      <div className="flex">
      <a href="/">HOME</a>
      <a href="/portfolio">PORTFOLIO</a>
      <a href="/about">ABOUT</a>
      <a href="/contact">CONTACT</a>
      <FaInstagram />
      </div>
      <IoArrowUp />
    </section>
    </div>
  )
}