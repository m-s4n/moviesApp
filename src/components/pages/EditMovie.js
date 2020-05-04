import React, { useEffect } from "react";
import NewMovieForm from "../NewMovieForm";
import { connect } from "react-redux";
import { actionUpdateMovie } from "../../redux/actions/movie/actionUpdateMovie";
import { actionFetchMovies } from "../../redux/actions/movie/actionFetchMovies";

function EditMovie({ updateMovie, updatedMovie, movie, fetchMovies, movieId, movies }) {
  useEffect(() => {
      if(movies.data.length === 0){
          fetchMovies();
      }
  }, []);
  return (
    <div>
      <NewMovieForm
        islem={updateMovie}
        responseMovie={updatedMovie}
        selectedMovie={movie}
        movieId={movieId}
      />
    </div>
  );
}

function searchMovie(movies, movieId) {
  return movies.filter((movie) => movie._id === movieId);
}

function mapStateToProps(state, ownProps) {
  let movie = searchMovie(state.movieReducer.data, ownProps.match.params.id);
  return {
    movie: movie[0],
    movieId: ownProps.match.params.id,
    updatedMovie: state.updateMovieReducer,
    movies:state.movieReducer
  };
}

const mapDispatchToProps = {
  updateMovie: actionUpdateMovie,
  fetchMovies: actionFetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
