import { FaInstagram } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";

export default function Footer(){
  return (
    <section>
      <p>.</p>
      <div>
      <a href="/">HOME</a>
      <a href="/portfolio">PORTFOLIO</a>
      <a href="/about">ABOUT</a>
      <a href="/contact">CONTACT</a>
      <FaInstagram />
      </div>
      <IoArrowUp />
    </section>
  )
}