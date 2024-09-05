"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/NavBar";
import styles from './styles.module.css';
import pic1 from '../../../public/images/pic1.jpg';



function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log('Form data changed:', formData);
    // You can place any action here that you want to execute on input change
  }, [formData]);

  const isValidEmail = (email: string) => emailRegex.test(email);

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmitMessage = () => {
    console.log(formData.name.length)
    if(formData.name.length < 1){
      //add red border to name
      console.log('must have name')
      return;
    }
    if(!isValidEmail(formData.email)){
      //add red border to email
      console.log('must have vaild email')
      return;
    }
    if(formData.message.length < 1){
      //add red border to message
      console.log('must have message')
      return;
    }
    //handle send message
    console.log('messege sent success')
  }

  return(
    <>
    <Navbar />
    
    <div className={styles.contactWrap}>
      
      <section>
      <form>
      <h1>Contact Us</h1>
      <h2>Ready to get started? Let's embark on this creative adventure together!</h2>
        <input name="name" placeholder="NAME" value={formData.name} onChange={handleInputChange}/>
        <input name="email" placeholder="EMAIL ADDRESS"  value={formData.email} onChange={handleInputChange}/>
        <textarea name="message" placeholder="MESSAGE"  value={formData.message} onChange={handleInputChange}/>
        <button type="button" onClick={handleSubmitMessage} className="bg-slate-800 ">Send Message</button>
      </form>
      <div><Image alt='logo' src={pic1} /></div>
      </section>
    </div>
    
    
    </>
  )
}

export default Contact;