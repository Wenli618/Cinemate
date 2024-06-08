
import { Fragment } from 'react';
import HeroSection from '@/components/feature/HeroSection';
import Head from 'next/head';
// import Image from 'next/image';



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
        {/* <div className='searchContainer'>
          <div className='searchBar'>
            <input/>
            <button>
              <Image 
                src="/images/film-reel-svgrepo-com.svg"
                width={33}
                height={33}
                alt="search"
              />
            </button>
          </div>
            
        </div> */}

    </Fragment>
  )
}

export default search