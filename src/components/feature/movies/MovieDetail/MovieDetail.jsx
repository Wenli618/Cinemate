import styles from './MovieDetail.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import Link from 'next/link';

import ArrowButton from '../../ArrowButton';

function MovieDetail({ movie, posterUrl, directedBy, cast, homepage }) {
  return (
    <>
      <Card size="single">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
            src={posterUrl} 
            alt={movie.title} 
            width={200}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>{movie.title}</h1>
          {homepage && <ArrowButton 
            text="Visit Homepage" 
            link={homepage}
            target='_blank'
          />}

          
          
          <div className={styles.info}>

              <div className={styles.infoItem}>
                <h3>Score:</h3>
                <p>{movie.vote_average}</p>
              </div>
            
            {movie.runtime > 0 &&
              <div className={styles.infoItem}>
              <h3>Runtime:</h3>
              <p>{`${movie.runtime} min`}</p>
              </div>
            }
            
            {movie.release_date && 
              <div className={styles.infoItem}>
              <h3>Release Date:</h3>
              <p>{movie.release_date}</p>
              </div>
            }
          </div>

          {movie.overview &&
            <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            </div>
          }
          

          {directedBy && 
            <div>
            <h3>Directed By</h3>
            <p>{directedBy}</p>
            </div>
          }
          
          {cast &&
            <div>
            <h3>Casted By</h3>
            <p>{cast}</p>
            </div>
          }
        </div>
      </div>
      </Card>
      
    </>
   
    
  );
}


export default MovieDetail;
