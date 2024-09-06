import pic1 from '../../../public/images/pic2.jpg'

import Image from 'next/image';

import Navbar from '@/components/NavBar';

export default function About(){
  return (
    <>
      <Navbar/>
      <section>
      <Image alt='pic' src={pic1} className='w-[100vw] mt-[-150px]'/>
      <h1>David Pistol</h1>
      </section>
      

      <section>
        <Image  alt='pic' src={pic1}/>
        <div>
          <h5>The Woman Behind The Lens.</h5>
          <p>inspired by artists like Gord Parker and Yousuf Karsh, uses light and storytelling to capture the transformative power of art in our city. Through meticulous attention to detail and self-portraiture, his images evoke emotions and inspire change, celebrating community and fostering self-reflection. Each photo is a gift, illuminating spaces with hope and diversity, inviting viewers to see the world through a lens of compassion and love.</p>
          <a href="/portfolio"> view portfolio</a>
        </div>
      </section>
      <section>
        <article>
          <h5>01.</h5>
          <h6>Empathy</h6>
          <p>the ability to understand and share the feelings of others.</p>
        </article>
        <article>
          <h5>01.</h5>
          <h6>Empathy</h6>
          <p>the ability to understand and share the feelings of others.</p>
        </article>
        <article>
          <h5>01.</h5>
          <h6>Empathy</h6>
          <p>the ability to understand and share the feelings of others.</p>
        </article>
      </section>
    </>
  )
}