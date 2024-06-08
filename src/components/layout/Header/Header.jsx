import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import burgerMenu from '../../../image/burgerMenu.svg'
import close from '../../../image/close.svg'
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = ()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <div className={styles.headerContainer}>
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
            </li>
          </ul>
        </nav>
        <div className={styles.menuToggle} onClick={handleMenuToggle}>
          <Image 
            src={burgerMenu}
            width={40}
            height={35}
            alt="Menu Open"
            className={`${styles.menuButton} ${menuOpen? "":styles.showButton} `}
          />
          <Image 
            src={close}
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

// import { useState } from 'react';
// import styles from './Header.module.scss';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.companyLogo}>D</div>
//       <nav className={`${styles.navbar} ${menuOpen ? styles.showNavbar : ''}`}>
//         <ul className={styles.navItems}>
//           <li className={styles.navItem}>
//             <a href="#" className={styles.navLink}>HOME</a>
//           </li>
//           <li className={styles.navItem}>
//             <a href="#" className={styles.navLink}>OFFER</a>
//           </li>
//           <li className={styles.navItem}>
//             <a href="#" className={styles.navLink}>SHOP</a>
//           </li>
//           <li className={styles.navItem}>
//             <a href="#" className={styles.navLink}>CONTACT</a>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.menuToggle} onClick={handleMenuToggle}>
//         <img src="/icons/bx-menu.svg" className={`${styles.bx} ${!menuOpen ? styles.showBx : styles.hideBx}`} alt="Open menu" />
//         <img src="/icons/bx-x.svg" className={`${styles.bx} ${menuOpen ? styles.showBx : styles.hideBx}`} alt="Close menu" />
//       </div>
//     </header>
//   );
// };

// export default Header;
