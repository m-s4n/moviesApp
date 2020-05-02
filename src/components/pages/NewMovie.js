import React from 'react';
import NewMovieForm from '../NewMovieForm';
import {connect} from 'react-redux';
import {actionAddMovie} from '../../redux/actions/movie/actionAddMovie';
const NewMovie = ({addedMovie, addMovie}) => {

    return (
        <div>
            <NewMovieForm addMovie={addMovie} addedMovie={addedMovie}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        addedMovie:state.addMovieReducer
    }
}

const mapDispatchToProps = {
    addMovie:actionAddMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);