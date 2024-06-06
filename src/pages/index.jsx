import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '@/components/feature/HeroSection';
import MovieList from '@/components/feature/movies/MovieList';



function HomePage({nowPlaying,upcoming,popular,topRated}) {
  return (
    <Fragment>
      <Head>
        <title>CineMate | Home</title>
        <meta 
          name='description'
          description='Cinemate is your ultimate movie companion, offering the latest information on now playing, upcoming, top rated, and popular movies'
        />
      </Head>
      <main>
        <HeroSection 
          title='Your Ultimate MOVIE Guide' 
          description="Whether you&apos;re a movie enthusiast or just looking for something to watch, we&apos;ve got you covered!"
          bgImage="/backgrounds/cinema.jpg"
        />
        <div className='movieSection'>
          <div className='movieContainer'>
            <div className='titleRow'>
              <h2>Now Playing</h2>
              <Link href='/movies/nowPlaying'>View More</Link>
            </div>
            {nowPlaying.length > 0 && <MovieList movies={nowPlaying} />}
          </div>
          <div className='movieContainer'>
            <div className='titleRow'>
              <h2 >Upcoming</h2>
              <Link href='/movies/upcoming'>View More</Link>
            </div>
            {upcoming.length > 0 && <MovieList movies={upcoming} />}
          </div>
          <div className='movieContainer'>
            <div className='titleRow'>
              <h2>Popular</h2>
              <Link href='/movies/popular'>View More</Link>
            </div>
            {popular.length > 0 && <MovieList movies={popular} />}
          </div>
          <div className='movieContainer'>
            <div className='titleRow'>
              <h2>Top Rated</h2>
              <Link href='/movies/topRated'>View More</Link>
            </div>
            {topRated.length > 0 && <MovieList movies={topRated} />}
          </div>

        </div>
      </main>
      
      
     
    </Fragment>
  )
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  try{
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    let data = await response.json()
    const nowPlaying = data.results.slice(0,5)


     response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
     data = await response.json()
    const upcoming = data.results.slice(0,5)
  

     response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
     data = await response.json()
    const popular = data.results.slice(0,5)


    response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}}`)
    }
    data = await response.json()
    const topRated = data.results.slice(0,5)
    // Returned data as props
    return {
      props: {
        nowPlaying: nowPlaying,
        upcoming: upcoming,
        popular: popular,
        topRated: topRated
      },
      revalidate: 60*60
    };
  }catch(error){
    console.error('Error fetching movies:',error)
  }
  
};

export default HomePage;