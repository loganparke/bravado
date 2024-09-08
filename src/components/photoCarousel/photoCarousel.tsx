import pic from '../../../public/images/about1.jpg';
import styles from './photoCarousel.module.css';

import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import Image from 'next/image';

const PhotoCarosuel: React.FC = () => {
  return (
    <div>
      <section className={styles.imageSection}>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
      </section>
      <div className='flex w-fit space-between m-auto'>
      <HiOutlineArrowLongLeft className='flex my-auto text-4xl cursor-pointer'/>
        <p className='text-center mx-4 text-xl'>
          01
          <br/>
          / 06  
        </p>
        <HiOutlineArrowLongRight className='flex my-auto text-4xl cursor-pointer'/>
      </div>
    </div>
  );
};

export default PhotoCarosuel;