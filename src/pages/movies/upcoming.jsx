import { Fragment } from 'react';
import Head from 'next/head';
import MovieList from '@/components/feature/movies/MovieList';
import HeroSection from '@/components/feature/HeroSection';

function Upcoming(props) {
  const { upcoming } = props; 

  return (
    <Fragment>
      <Head>
        <title>CINEMATE | Upcoming</title>
        <meta 
          name='description'
          description='Stay updated with the upcoming movies!'
        />
      </Head>
     
      <HeroSection 
        title='Upcoming'
        description='Stay updated with the upcoming movies!'
        bgImage="/backgrounds/cinema.webp"
      />
      {upcoming.length > 0 && <MovieList movies={upcoming} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    const data = await response.json()
    const movies = data.results
  
    // Returned data as props
    return {
      props: {
        upcoming: movies
      },
      revalidate: 60*60
    };
  }catch(err){
    console.log('Error fetching movies:',err)
  }
 
};

export default Upcoming;