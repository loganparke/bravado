import pic1 from '../../../public/images/pic2.jpg';
import about1 from '../../../public/images/about1.jpg'
import styles from './styles.module.css';
import Image from 'next/image';

import Navbar from '@/components/NavBar';
import PhotoCarosuel from '@/components/photoCarousel/photoCarousel';
import Reviews from '@/components/reviews';

export default function About(){
  return (
    <>
      <Navbar/>
      <div className={styles.aboutWrap}>
      <section className={styles.aboutHero}>
      <h1 className='text-7xl  drop-shadow-lg'>David Pistol</h1>
      </section>
      

      <section className='flex justify-center items-center p-36'>
        <div className='w-[80%] max-w-[500px] mr-24' >
        <Image className='w-[150%]' alt='pic' src={about1}/>
        </div>
        
        <div className='w-[45%]'>
          <h5 className='relative bottom-12 text-3xl'>The Woman Behind The Lens.</h5>
          <div className='ml-auto max-w-[500px]'>
          <p className='flex  max-w-[400px] mr-20 mb-12'>inspired by artists like Gord Parker and Yousuf Karsh, uses light and storytelling to capture the transformative power of art in our city. Through meticulous attention to detail and self-portraiture, his images evoke emotions and inspire change, celebrating community and fostering self-reflection. Each photo is a gift, illuminating spaces with hope and diversity, inviting viewers to see the world through a lens of compassion and love.</p>
          <a href="/portfolio" className='relative top-20 w-fit font-bold bg-white text-black p-5 pl-8 pr-8 rounded-[100px]'> VIEW PORTFOLIO</a>
          </div>
        </div>
      </section>
      <section className='flex space-between m-auto w-fit'>
        <article className='w-[350px] mx-10'>
          <h5>01.</h5>
          <h6 className='text-2xl my-4'>Empathy</h6>
          <p>the ability to understand and share the feelings of others.</p>
        </article>
        <article className='w-[350px] mx-10'>
          <h5>02.</h5>
          <h6 className='text-2xl my-4'>Empowerment</h6>
          <p>the process of becoming stronger and more confident, especially in controlling one's life and claiming one's rights.</p>
        </article>
        <article className='w-[350px] mx-10'>
          <h5>03.</h5>
          <h6 className='text-2xl my-4'>Love</h6>
          <p>an intense feeling of deep affection. a great interest and pleasure in something.</p>
        </article>
      </section>

      <PhotoCarosuel />
      <Reviews />

      <section className={styles.aboutFooter}>
        <div>
          <h6>The moment is now</h6>
        </div>
        <div>
          <p>Let's explore one day of your life and turn it into timeless mementos</p>
          <a href='/contact'>LET'S CREATE</a>
        </div>
      </section>
    </div>
    </>
  )
}