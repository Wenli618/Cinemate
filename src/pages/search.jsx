import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from "@/components/feature/HeroSection"

function search() {
  return (
    <Fragment>
      <Head>
        <title>CineMate | Search</title>
        <meta 
          name='description'
          description='Find your next favorite movie with our comprehensive movie search.'
        />
      </Head>
      
        <HeroSection 
          title='Search Movie' 
          description="Uncover Your Next Favorite Flick"
          bgImage="/backgrounds/cinema.webp"
        />
        <div className='searchContainer'>
            <h1>In production...</h1>
        </div>

    </Fragment>
  )
}

export default search