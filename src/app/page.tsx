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

    
    let bg = target.children[1].children[0];
    let text = target.children[1].children[1];
    console.log(bg, text);
    console.log(`Mouse ${action} from the ${side}`);
    if(side == 'left'){
      bg.style.maxWidth = '400px';
      text.style.opacity = '1';
    }
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

      <section className='w-[1200px] max-w-[100%] flex m-auto justify-center flex-wrap mb-20 '>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='max-w-[90%] w-[330px] mx-4 my-4 cursor-pointer relative'>
        <Image alt='pic' src={pic}/>
        <article className='absolute w-full h-full top-0 left-0 right-0 bottom-0 flex align-center justify-center'>
          <div className={`custom-transition bg-gray-800/[.8] absolute w-full h-full top-0 left-0 right-0 bottom-0 max-w-[0px]`}></div>
          <p className='custom-transition flex relative w-fit h-fit text-center mx-auto my-auto opacity-0'>DOUBLE VISION</p>
        </article>
        </div>
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