
import { useRouter } from 'next/router'

import MovieDetail from '@/components/feature/movies/MovieDetail'



function DetailPage({movie,casts,crews}) {
  const baseUrl = "https://image.tmdb.org/t/p/w500"
        const posterPath = movie.poster_path
        const posterUrl = baseUrl + posterPath
  const router = useRouter()
  const movieId = router.query.movieID

  const filteredDirectorArray = Object.values(crews).filter(crew => crew.job === 'Director')
  console.log('filteredDirectorArray:',filteredDirectorArray)
  const directedBy = filteredDirectorArray.map(director => director.name).join(', ')
  console.log('directedBy:',directedBy)
  const cast = casts.map(cast => cast.name).join(', ')
  console.log('castBy:',cast)



  return (
   <MovieDetail 
      movie={movie} 
      posterUrl={posterUrl} 
      directedBy={directedBy}
      cast={cast}
   />
  )
}





// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async (context) => {
  const movieId = context.params.movieID
  console.log('movieID:', movieId)
  
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0feeea8b1dc6a48d6c07d2360a3dc336&language=en-US`);
  const movie = await response.json();
  if (!movie.id) {
    return {
      notFound: true,
    };
  }
console.log('movie:',movie)
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0feeea8b1dc6a48d6c07d2360a3dc336&language=en-US`);
  const credits = await res.json();
  console.log('credits',credits)
  const crews = credits.crew
  const casts = credits.cast

  // Returned data as props
  return {
    props: {
      movie: movie,
      crews: crews,
      casts: casts
    },
    revalidate: 60
  }
}

export const getStaticPaths = async () => {
 
  return {
    paths: [],
    fallback: 'blocking', // 'blocking' ensures that new paths are server-rendered and cached on the first request
  };
};




export default DetailPage