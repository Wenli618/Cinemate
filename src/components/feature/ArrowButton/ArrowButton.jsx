import Link from "next/link"
import styles from './ArrowButton.module.scss'

function ArrowButton({text,link, target='_self'}) {
  return (
   
    <div className={styles.container}>
        <Link 
            href={link} 
            className={styles.animatedArrow}
            target={target}
        >
            <span className={`${styles.arrow} ${styles.arrowLeft}`}>
            <span className={styles.shaft}></span>
            </span>
            <span className={styles.main}>
            <p className={styles.text}>{text}</p>
            <span className={`${styles.arrow} ${styles.arrowRight}`}>
                <span className={styles.shaft}></span>
            </span>
            </span>
        </Link>
    </div>
    )
}

export default ArrowButton

