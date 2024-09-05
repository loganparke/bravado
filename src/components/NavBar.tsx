import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import logo from '../../public/images/photoLogo.png';

const Navbar: React.FC = () => {
  return (
      <nav className='homeNav'>
      <Image alt='logo' src={logo} width={120}/>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/portfolio">Photo Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;