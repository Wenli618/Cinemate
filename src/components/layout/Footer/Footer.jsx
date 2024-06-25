import styles from './Footer.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa"



function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerNav}>
          <Link className={styles.brand} href='/'>
              <span className={styles.logoMain}>CINEM</span>
              <span >
                <Image
                  src="/images/film-reel-svgrepo-com.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </span>
              <span className={styles.logoMain}>ATE</span>
          </Link >
          <ul className={styles.nav}>
            <li className={styles.navLink}>
              <Link href='/about'>About</Link>
            </li>
            <li className={styles.navLink}>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className={styles.navLink}>
              <Link href='/privacy'>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <Link href='https://github.com/Wenli618/Cinemate' target='_blank'>
            <FaGithub className={styles.github} />
          </Link>
          <span>Copyright &copy; {getCurrentYear()}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;

