
import { Fragment } from 'react';
import { useState } from 'react';
import Head from 'next/head';

import MovieList from '@/components/feature/movies/MovieList';
import LoadingSpiner from '@/components/feature/LoadingSpiner/LoadingSpiner';


function SearchPage() {

  const [query, setQuery] = useState(null)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState(null)


  const handleInputChange = (e)=> {
    console.log("input value:",e.target.value)
    setQuery(e.target.value)
  } 
  console.log('query:',query)

  const handleSearch = async ()=>{
    if(!query) return
    setLoading(true)
    setMovies(null)
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}`)
      setQuery('')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}}`)
      }
      const data = await response.json()
      const movies = data.results
      // filter out movies with no poster_path and overview
      const filteredMovies = movies.filter(movie=>movie.poster_path !== null && movie.overview !== '')
      // sort movies by score
      filteredMovies.sort((a,b) => b.vote_average - a.vote_average)
      console.log('filteredMovie:',filteredMovies)

    
      setMovies(filteredMovies)
  
    }catch(err){
      console.log('Error fetching movies:',err)
    }
    setLoading(false)
    
  }
  return (
    <Fragment>
      <Head>
        <title>CineMate | Search</title>
        <meta 
          name='description'
          description='Find your next favorite movie with our comprehensive movie search.'
        />
      </Head>
     
        <div className='searchContainer'>
          <h1>Search Movie</h1>
          <div className='searchBar'>
            <input 
              type='text' 
              value={query}
              onChange={handleInputChange} 
              placeholder='Search for a movie...'/>
            <button 
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? <LoadingSpiner /> : 'Search'}
            </button>
          </div>

          {movies?.length > 0 ? <MovieList movies={movies} /> : movies?.length == 0 ? <p style={{color:'white'}}>No movies found. Please try a different search.</p> : null}
            
        </div>

    </Fragment>
  )
}

export default SearchPage