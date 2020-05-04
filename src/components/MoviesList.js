import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actionFetchMovies } from "../redux/actions/movie/actionFetchMovies";
import MovieCart from "./tools/movie/MovieCart";
import LoadingData from "./tools/helpers/LoadingData";
import alertify from 'alertifyjs';
import {actionDeleteMovie} from '../redux/actions/movie/actionDeleteMovie';

const MoviesList = ({movies, fetchMovies, deletedMovie, deleteMovie}) => {

  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const onDeleteSuccessfuly = (deletedMovie) => {
      if(deletedMovie.isFilled && isDeleted){
        alertify.success('Movie delete successfully');
        setIsDeleted(false);
      }
      else if(deletedMovie.isRejected.status && isDeleted){
        alertify.error('An error occurred while delete movie');
        setIsDeleted(false);
      }
    }
    fetchMovies();
    onDeleteSuccessfuly(deletedMovie);
    
  },[deletedMovie])

  

  const onDelete = (movieId) => {
    deleteMovie(movieId);
    setIsDeleted(true);
  }

    return (
      <div>
        <LoadingData data={movies} Component={MovieCart} quantityInLine={4} deleteMovie={onDelete}></LoadingData>
      </div>
    );
  }

MoviesList.propTypes = {
  movies: PropTypes.shape({
    isPending: PropTypes.bool,
    isFilled: PropTypes.bool,
    data: PropTypes.array.isRequired,
    isRejected: PropTypes.object,
  }),
};

function mapStateToProps(state) {
  return {
    movies: state.movieReducer,
    deletedMovie: state.deleteMovieReducer
  };
}

const mapDispatchToProps = {
  fetchMovies: actionFetchMovies,
  deleteMovie: actionDeleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
