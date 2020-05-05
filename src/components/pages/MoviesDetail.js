import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import MovieCartDetail from '../tools/movie/MovieCartDetail';
import {actionFetchMovies} from '../../redux/actions/movie/actionFetchMovies';
function MoviesDetail({fetchMovies, selectedMovie, movies}) {

    useEffect(() => {
        if(movies.length === 0){
            fetchMovies();
        }
    },[])
    return (
        <div>
            {
                selectedMovie ? <MovieCartDetail movie={selectedMovie} /> :null
            }
        </div>
    )
}

function searchMovie(movies, movieId){
    return movies.filter(movie => movie._id === movieId);
}

function mapStateToProps(state, ownProps){
    let selectedMovie = searchMovie(state.movieReducer.data, ownProps.match.params.id);
    return{
        selectedMovie:selectedMovie[0],
        movies:state.movieReducer.data
    }
}

const mapDispatchToProps = {
    fetchMovies:actionFetchMovies
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetail);
