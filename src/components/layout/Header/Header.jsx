import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false)
  const handleMenuToggle = ()=>{
    setMenuOpen(!menuOpen);
  }
  const handleDropdownToggle = ()=>{
    setDropdownActive(!dropdownActive)
  }

  const handleClickOutside = (e) => {
    if(
      !e.target.matches('[data-dropdown-button') && 
      !e.target.closest('[data-dropdown')
    ){
      setDropdownActive(false)
    }
    if(
      !e.target.matches('[data-menu-button]') && 
      !e.target.closest('[data-navbar')
    ){
      setMenuOpen(false)
    }
    
  }

  // if click outside, dropdown menu will close.
  if(typeof window !== 'undefined'){
    document.addEventListener('click', handleClickOutside)
  }



  return (
    <div className={styles.headerContainer} data-navbar>
       <header className={styles.header}>
        <div className={styles.brand}>
          <Link href='/'>
            <span className={styles.logoMain}>CINEM</span>
            <span >
              <Image
                src="/images/film-reel-svgrepo-com.svg"
                width={33}
                height={33}
                alt="Picture of the author"
              />
            </span>
            <span className={styles.logoMain}>ATE</span>
          </Link>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.showNav : ''}`}>
          <ul>
            <li>
              <Link className={styles.navLink} href='/'>Home</Link>
            </li>
            <li>
              <div className={`${styles.dropdown} ${dropdownActive? styles.active:""}`} data-dropdown>
                <button className={styles.dropdownButton} data-dropdown-button onClick={handleDropdownToggle}>Movies</button>
                <div className={styles.dropdownMenu }>
                    <Link className={styles.dropdownLink} href='/movies/nowPlaying'>Now Playing</Link>
                    <Link className={styles.dropdownLink} href='/movies/upcoming'>Upcoming</Link>
                    <Link className={styles.dropdownLink} href='/movies/popular'>Popular</Link>
                    <Link className={styles.dropdownLink} href='/movies/topRated'>Top Rated</Link>
                </div>
              </div>
              {/* <Link className={styles.dropdownButton} href="#">
                <span>Movies</span>
                <span className={styles.smallTriangle}>&#9660;</span>
              </Link>
              <div className={styles.dropdownMenu}>
                <Link className={styles.dropdownContent} href='/movies/nowPlaying'>Now Playing</Link>
                <Link href='/movies/upcoming'>Upcoming</Link>
                <Link href='/movies/popular'>Popular</Link>
                <Link href='/movies/topRated'>Top Rated</Link>
              </div> */}
            </li>
            <li>
              <Link className={styles.navLink} href='/search'>Search</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='/about'>About</Link>
            </li>
            {/* <li>
              <Link className={styles.navLink} href='/movies/nowPlaying'>Now Playing</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='/movies/upcoming'>Upcoming</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='/movies/popular'>Popular</Link>
            </li>
            <li>
              <Link className={styles.navLink} href='/movies/topRated'>Top Rated</Link>
            </li> */}
          </ul>
        </nav>
        <div className={styles.menuToggle} onClick={handleMenuToggle} data-menu-button>
          <Image 
            src="/images/burgerMenu.svg"
            width={40}
            height={35}
            alt="Menu Open"
            className={`${styles.menuButton} ${menuOpen? "":styles.showButton} `}
          />
          <Image 
            src="/images/close.svg"
            width={30}
            height={30}
            alt="Menu close"
            className={`${styles.menuButton} ${menuOpen? styles.showButton:""} `}
          />
          
          
        
        </div>
      </header>
    </div>
   
  );
}

export default Header;

