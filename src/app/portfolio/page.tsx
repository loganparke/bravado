import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/photoLogo.png';
import pic1 from '../../../public/images/pic1.jpg';
import pic2 from '../../../public/images/pic2.jpg';
import pic3 from '../../../public/images/pic3.jpg';

function Portfolio() {
  return (
    <div style={{
      width: "100vw",
      position: "relative",
      right: "8px",
      top: "-20px",
    }}>
    <section className={styles.portfolioHead}>
    <nav>
      <Image alt='logo' src={logo} width={120}/>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/portfolio">Photo Portfolio</Link>
        <Link href="/">Info</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>

    <h1>My Portfolio</h1>
    <p>and recent work</p>
    </section>

    <section className={styles.imageContain}>
      <article>
        <div><Image alt='logo' src={pic1} /></div>
        <div><Image alt='logo' src={pic2} /></div>
        <div><Image alt='logo' src={pic1} /></div>
      </article>
      <article>
        <div><Image alt='logo' src={pic3} /></div>
        <div><Image alt='logo' src={pic1} /></div>
        <div><Image alt='logo' src={pic2} /></div>
      </article>
      <article>
        <div><Image alt='logo' src={pic2} /></div>
        <div><Image alt='logo' src={pic3} /></div>
        <div><Image alt='logo' src={pic1} /></div>
      </article>
    </section>

    </div>
  );
}

export default Portfolio;