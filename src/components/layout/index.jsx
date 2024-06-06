import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400', '700']
})

function Layout(props) {
  return (
    <div className={`${styles.app} ${inter.className}`}>
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
