import React from 'react'
import {connect} from 'react-redux';
import {actionFetchMovieById} from '../../redux/actions/movie/actionFetchMovieById';
import MovieCartDetail from '../tools/movie/MovieCartDetail';
function MoviesDetail({fetchMovieById, match, selectedMovie}) {
    return (
        <div>
            {
                selectedMovie.data._id ? <MovieCartDetail movie={selectedMovie.data} /> :null
            }
        </div>
    )
}


function mapStateToProps(state){
    return{
        selectedMovie: state.movieByIdReducer
    }
}

const mapDispatchToProps = {
    fetchMovieById:actionFetchMovieById
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetail);
