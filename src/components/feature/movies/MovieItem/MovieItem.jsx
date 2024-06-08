import styles from './MovieItem.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import Link from 'next/link';

function MovieItem(props) {
  const {posterUrl, title, id,voteAverage} = props
  const score = voteAverage.toFixed(1)
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.movieMain}>
        <Link href={`/movies/${id}`} className={styles.imageBox}>
          <Image 
            src={posterUrl} 
            alt={title} 
            width={100}
            height={300}
          /> 
        </Link>
        <div className={styles.movieContent}>
          <span className={styles.score}>{score}</span>
          <Link href={`/movies/${id}`} className={styles.title}>
            <h2>{title}</h2>
          </Link>
          
        </div>
      </div>
    </Card>
  );
}


export default MovieItem;



