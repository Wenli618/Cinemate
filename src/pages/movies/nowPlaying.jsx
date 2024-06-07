import { Fragment } from 'react'
import Head from 'next/head'
import MovieList from '@/components/feature/movies/MovieList'
import HeroSection from '@/components/feature/HeroSection';

function NowPlaying(props) {
  const { nowPlaying } = props; 
 
  return (
    <Fragment>
      <Head>
        <title>CINEMATE | Now Playing</title>
        <meta 
          name='description'
          description='Stay updated with the latest movies now playing in theaters.'
        />
      </Head>

      <HeroSection 
        title='Now Playing'
        description='Stay updated with the latest movies now playing in theaters.'
        bgImage="/backgrounds/cinema.webp"
      />
     
      {nowPlaying.length > 0 && <MovieList movies={nowPlaying} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    const data = await response.json()
    const movies = data.results
  
    // Returned data as props
    return {
      props: {
        nowPlaying: movies
      },
      revalidate: 60*60
    };
  }catch(error){
    console.error('Error fetching movies:',error)
  }
  
};

export default NowPlaying;