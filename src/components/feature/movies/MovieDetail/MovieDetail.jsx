import styles from './MovieDetail.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';

function MovieDetail({ movie, posterUrl, directedBy, cast }) {
  return (
    <Card size="single">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
            src={posterUrl} 
            alt={movie.title} 
            layout="responsive"
            width={200}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.detailsContainer}>
          <h1>{movie.title}</h1>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>Score:</h3>
              <p>{movie.vote_average}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Runtime:</h3>
              <p>{`${movie.runtime} min`}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Release Date:</h3>
              <p>{movie.release_date}</p>
            </div>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Directed By</h3>
            <p>{directedBy}</p>
          </div>
          <div>
            <h3>Casted By</h3>
            <p>{cast}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MovieDetail;
