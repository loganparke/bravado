import styles from './styles.module.css'
import { useRef } from 'react';

const BlockNav: React.FC = () => {

  let portfolio = useRef<HTMLAnchorElement>(null);
  let blog = useRef<HTMLAnchorElement>(null);
  let about = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    
    let tab = event.target.children[0].children[1].textContent;
  if(tab == 'PORTFOLIO'){
    console.log('portfolio')
  } else if(tab == 'BLOG'){
    console.log(blog.current)
    blog.current.classList.add('highlighted')
    portfolio.classList.remove('higlighted')
    
  }else if(tab == 'ABOUT ME'){
    console.log('ABOUT ME')
  }

    console.log(tab)
  };

  return (
    <section className={styles.about}>
      <section>
      <div >
      <a href="/portfolio" className={styles.highlighted}  onMouseEnter={handleMouseEnter}  ref={portfolio}>
        <article>
          <p>view my work</p>
          <h2>PORTFOLIO</h2>
        </article>
      </a>
      <a href="/blog" onMouseEnter={handleMouseEnter} ref={blog}>
        <article>
          <p>let my thoughts stimulate your mind</p>
          <h2>BLOG</h2>
        </article>
      </a>
      <a href="/about" onMouseEnter={handleMouseEnter} ref={about}>
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