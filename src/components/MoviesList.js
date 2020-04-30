import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actionFetchMovies } from "../redux/actions/movie/actionFetchMovies";
import MovieCart from "./tools/movie/MovieCart";
import LoadingData from "./tools/helpers/LoadingData";

class MoviesList extends Component {
 
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <LoadingData data={movies} Component={MovieCart} quantityInLine={4}></LoadingData>
      </div>
    );
  }
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
  };
}

const mapDispatchToProps = {
  fetchMovies: actionFetchMovies,
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
