import Image from 'next/image';
import styles from './reviews.module.css';
import pic1 from '../../../public/images/pic1.jpg';
import pic2 from'../../../public/images/pic2.jpg';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Reviews: React.FC = () => {
  return (
    <section className='w-[100%] max-w-[1200px] flex m-auto p-20'>
      <div className='flex flex-wrap w-[85%]'>
        <div className='w-full flex'>
          <div className='w-[150px] h-[150px] mr-12'>
        <Image alt="img" src={pic1} className='h-[150px] rounded-[100px]'/>
        </div>
        <div>
        <p className='font-thin mb-8'>WORDS TO LIVE BY</p>
        <p className='font-medium text-lg'>"SUCCESS IS NOT FINAL; FAILURE IS NOT FATAL; IT IS THE COURAGE TO CONTINUE THAT COUNTS."</p>
        </div>
        </div>
        <div  className='w-full flex pl-40'>
          <HiOutlineArrowLongLeft className='text-5xl mr-4'/>
          <HiOutlineArrowLongRight className='text-5xl'/>
          <p className='ml-auto flex'>- WINSTON S. CHURCHILL</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;