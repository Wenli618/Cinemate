
import { useRouter } from 'next/router'

import MovieDetail from '@/components/feature/movies/MovieDetail'



function DetailPage({movie,casts,crews,trailer}) {
  const baseUrl = "https://image.tmdb.org/t/p/w500"
  const posterPath = movie.poster_path
  const posterUrl = baseUrl + posterPath

  const homePage = movie.homepage

  const router = useRouter()
  const movieId = router.query.movieID

  const filteredDirectorArray = Object.values(crews).filter(crew => crew.job === 'Director')
  const directedBy = filteredDirectorArray.map(director => director.name).join(', ')
  const cast = casts.map(cast => cast.name).join(', ')
  
  const trailerUrl = `https://www.youtube.com/embed/${trailer?.key}`


  return (
    <div className='movieContainer'>
      <MovieDetail 
        movie={movie} 
        posterUrl={posterUrl} 
        directedBy={directedBy}
        cast={cast}
        homepage={homePage}
      />
      <div>
      </div>
      <div className='trailer'>
          <h2>Trailer</h2>
          {
            trailer && trailer.key ?
            <iframe
            width="560"
            height="315"
            src={trailerUrl}
            frameBorder="0"
            allow="encrypted-media"
          /> :
          <p>No trailer available</p>
          }
          
      </div>
    </div>
   
  )
}
// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async (context) => {
  const movieId = context.params.movieID
 
  const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0feeea8b1dc6a48d6c07d2360a3dc336&language=en-US`);
  const movie = await movieResponse.json();
  if (!movie.id) {
    return {
      notFound: true,
    };
  }

  const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0feeea8b1dc6a48d6c07d2360a3dc336&language=en-US`);
  const credits = await creditsResponse.json();
  const crews = credits.crew
  const casts = credits.cast
  
  const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0feeea8b1dc6a48d6c07d2360a3dc336`)
  const data = await trailerResponse.json()
 
  let trailer = data.results.find(video => video.type === 'Trailer'&& video.site === 'YouTube')
  if (!trailer) {
    trailer = null;
  }
  

 
  // Returned data as props
  return {
    props: {
      movie: movie,
      crews: crews,
      casts: casts,
      trailer: trailer
    },
    revalidate: 60*60
  }
}

export const getStaticPaths = async () => {
 
  return {
    paths: [],
    fallback: 'blocking', // 'blocking' ensures that new paths are server-rendered and cached on the first request
  };
};




export default DetailPage