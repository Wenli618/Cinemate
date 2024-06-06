import { Fragment } from 'react';
import Head from 'next/head';
import MovieList from '@/components/feature/movies/MovieList';
import HeroSection from '@/components/feature/HeroSection';

function TopRated(props) {
  const { topRated } = props; 
 
  return (
    <Fragment>
      <Head>
        <title>CINEMATE | topRated</title>
        <meta 
          name='description'
          description='Review top-rated movies!'
        />
      </Head>
     
      <HeroSection 
        title='Top Rated'
        description='Review top-rated movies!'
        bgImage='/backgrounds/cinema.jpg'
      />

      {topRated.length > 0 && <MovieList movies={topRated} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    const data = await response.json()
    const movies = data.results
    // Returned data as props
    return {
      props: {
        topRated: movies
      },
      revalidate: 60*60
    };
  }catch(err){
    console.log('Error fetching movies:',err)
  }
};

export default TopRated;