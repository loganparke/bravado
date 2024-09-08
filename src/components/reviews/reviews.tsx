import Image from 'next/image';
import styles from './reviews.module.css';
import pic1 from '../../../public/images/pic1.jpg';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Reviews: React.FC = () => {
  return (
    <section className='w-[100%] max-w-[1200px] flex m-auto'>
      <div className='flex flex-wrap w-[85%]'>
        <div className='w-full flex'>
        <Image alt="img" src={pic1} width="150" height="150" className='rounded-[100px] w-[150px] h-[150px] object-cover'/>
        <div>
        <p>WORDS TO LIVE BY</p>
        <p>"SUCCESS IS NOT FINAL; FAILURE IS NOT FATAL; IT IS THE COURAGE TO CONTINUE THAT COUNTS."</p>
        </div>
        </div>
        <div  className='w-full'>
          <HiOutlineArrowLongLeft />
          <HiOutlineArrowLongRight />
          <p>- WINSTON S. CHURCHILL</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;