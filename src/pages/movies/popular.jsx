import { Fragment } from 'react'
import Head from 'next/head'
import MovieList from '@/components/feature/movies/MovieList'
import HeroSection from '@/components/feature/HeroSection';

function Popular(props) {
  const { popular } = props; 
 
  return (
    <Fragment>
      <Head>
        <title>CINEMATE | Popular</title>
        <meta 
          name='description'
          description='Check the popular movies!'
        />
      </Head>
      <HeroSection 
        title='Popular'
        description='Check the popular movies!'
        bgImage="/backgrounds/cinema.webp"
      />
      {popular.length > 0 && <MovieList movies={popular} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    const data = await response.json()
    const movies = data.results
  
    // Returned data as props
    return {
      props: {
        popular: movies
      },
      revalidate: 60*60
    };
  }catch(err){
    console.log('Error fetching movies:',err)
  }
};

export default Popular;