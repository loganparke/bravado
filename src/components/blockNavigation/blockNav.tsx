import styles from './styles.module.css'
import { useRef } from 'react';

const BlockNav: React.FC = () => {

  let aboutSect = useRef<HTMLDivElement | null>(null);

  let portfolio = useRef<HTMLAnchorElement | null>(null);
  let blog = useRef<HTMLAnchorElement | null>(null);
  let about = useRef<HTMLAnchorElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {

    const target = event.currentTarget as HTMLAnchorElement;
    
    let tab = target.children[0].children[1].textContent;
  if(tab == 'PORTFOLIO'){
    blog.current?.classList.remove(styles.highlighted)
    portfolio.current?.classList.add(styles.highlighted)
    about.current?.classList.remove(styles.highlighted)
    aboutSect.current?.classList.remove(styles.bg2)
    aboutSect.current?.classList.remove(styles.bg3)
    aboutSect.current?.classList.add(styles.bg1)
  } else if(tab == 'BLOG'){
    blog.current?.classList.add(styles.highlighted)
    portfolio.current?.classList.remove(styles.highlighted)
    about.current?.classList.remove(styles.highlighted)
    aboutSect.current?.classList.remove(styles.bg1)
    aboutSect.current?.classList.remove(styles.bg3)
    aboutSect.current?.classList.add(styles.bg2)
  }else if(tab == 'ABOUT ME'){
    blog.current?.classList.remove(styles.highlighted)
    portfolio.current?.classList.remove(styles.highlighted)
    about.current?.classList.add(styles.highlighted)
    aboutSect.current?.classList.remove(styles.bg1)
    aboutSect.current?.classList.remove(styles.bg2)
    aboutSect.current?.classList.add(styles.bg3)
  }

  };

  return (
    <section ref={aboutSect} className={styles.about}>
      <section>
      <div >
      <a href="/portfolio" className={`${styles.highlighted}`}  onMouseEnter={handleMouseEnter}  ref={portfolio}>
        <article>
          <p>view my work</p>
          <h2>PORTFOLIO</h2>
        </article>
      </a>
      <a href="/blog" className='h' onMouseEnter={handleMouseEnter} ref={blog}>
        <article>
          <p>let my thoughts stimulate your mind</p>
          <h2>BLOG</h2>
        </article>
      </a>
      <a href="/about" className='h' onMouseEnter={handleMouseEnter} ref={about}>
        <article>
          <p>get to know me</p>
          <h2>ABOUT ME</h2>
        </article>
      </a>
      </div>
      </section>
    </section>
  );
};

export default BlockNav;