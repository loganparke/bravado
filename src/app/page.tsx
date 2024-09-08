"use client"
import Link from 'next/link';
import Image from 'next/image';

import pic from '../../public/images/pic3.jpg'

import Navbar from '@/components/NavBar';

export default function Home(){
  const determineSide = (event: MouseEvent<HTMLDivElement>, action: string) => {
    // Access the target element directly from the event
    const target = event.currentTarget;

    // Get the bounding rectangle of the target element
    const rect = target.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the distances to the edges
    const fromLeft = mouseX - rect.left;
    const fromRight = rect.right - mouseX;
    const fromTop = mouseY - rect.top;
    const fromBottom = rect.bottom - mouseY;

    // Determine the closest edge
    const minDistance = Math.min(fromLeft, fromRight, fromTop, fromBottom);

    let side: string;
    if (minDistance === fromLeft) {
      side = 'left';
    } else if (minDistance === fromRight) {
      side = 'right';
    } else if (minDistance === fromTop) {
      side = 'top';
    } else {
      side = 'bottom';
    }

    console.log(`Mouse ${action} from the ${side}`);
  };
  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    determineSide(event, 'entered');
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    determineSide(event, 'left');
  };


  return (
    <>
      <Navbar/>
      <div>hi</div>

      <section className='w-[1200px] max-w-[100%] flex m-auto justify-center flex-wrap mb-20'>
        <Image onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
        <Image alt='pic' src={pic} className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer'/>
      </section>
    </>
  )
}