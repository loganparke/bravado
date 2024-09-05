import pic1 from '../../../public/images/pic2.jpg'

import Image from 'next/image';

import Navbar from '@/components/NavBar';

export default function About(){
  return (
    <>
      <Navbar/>
        <Image alt='pic' src={pic1} className='w-[100vw] mt-[-150px]'/>
      <div>about</div>
    </>
  )
}