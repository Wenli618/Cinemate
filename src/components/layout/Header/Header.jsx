import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

function Header() {
  return (
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
      <nav className={styles.nav}>
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
    </header>
  );
}

export default Header;