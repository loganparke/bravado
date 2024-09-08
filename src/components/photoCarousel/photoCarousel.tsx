import pic from '../../../public/images/about1.jpg';
import styles from './photoCarousel.module.css';

import Image from 'next/image';

const PhotoCarosuel: React.FC = () => {
  return (
    <div>photos moving
      <section className={styles.imageSection}>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
        <Image alt='image' src={pic} width={400}/>
      </section>
    </div>
  );
};

export default PhotoCarosuel;