'use client'

import { useRef } from 'react';
import pic from '../../../public/images/about1.jpg';
import styles from './photoCarousel.module.css';

import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import Image from 'next/image';


const PhotoCarosuel: React.FC = () => {
  const pic1 = useRef<HTMLImageElement | null>(null);
  const pic2 = useRef<HTMLImageElement | null>(null);
  const pic3 = useRef<HTMLImageElement | null>(null);
  const pic4 = useRef<HTMLImageElement | null>(null);
  const pic5 = useRef<HTMLImageElement | null>(null);
  const pic6 = useRef<HTMLImageElement | null>(null);

  const moveLeft = () => {
    console.log('left')
  }
  const moveRight = () => {
    console.log('right');
    if(pic1.current){
      pic1.current.classList.add(styles.move1);
    }
    
  }

  return (
    <div>
      <section className={styles.imageSection}>
        <Image ref={pic1} alt='image' className='noMove' src={pic} width={400}/>
        <Image ref={pic2} alt='image' className='noMove' src={pic} width={400}/>
        <Image ref={pic3} alt='image' className='noMove' src={pic} width={400}/>
        <Image ref={pic4} alt='image' className='noMove' src={pic} width={400}/>
        <Image ref={pic5} alt='image' className='noMove' src={pic} width={400}/>
        <Image ref={pic6} alt='image' className='noMove' src={pic} width={400}/>
      </section>
      <div className='flex w-fit space-between m-auto'>
      <button onClick={() => moveLeft()}><HiOutlineArrowLongLeft className='flex my-auto text-4xl cursor-pointer'/></button>
        <p className='text-center mx-4 text-xl'>
          01
          <br/>
          / 06  
        </p>
        <button onClick={() => moveRight()}><HiOutlineArrowLongRight className='flex my-auto text-4xl cursor-pointer'/></button>
      </div>
    </div>
  );
};

export default PhotoCarosuel;