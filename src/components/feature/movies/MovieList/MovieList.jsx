
import MovieItem from '../MovieItem/MovieItem'
import Container from '@/components/common/Container/Container';

function MovieList(props) {
  const { movies } = props;

  return (
    <Container>
      {movies.map((movie) => {
        const baseUrl = "https://image.tmdb.org/t/p/w500"
        const posterPath = movie.poster_path
        const posterUrl = baseUrl + posterPath
        return(
          <MovieItem
            key={movie.title}
            id={movie.id}
            posterUrl={posterUrl}
            title={movie.title}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        )
        
})}
    </Container>
  );
}

export default MovieList;