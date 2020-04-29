import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class MoviesList extends Component{

    emptyMovie = (
        <p>There are not movies yet ! </p>
    )

    moviesList = (
        <div>
            Movies List
        </div>
    )
    render(){
        const {movies} = this.props;
        return(
            <div>
                {
                    movies.length > 0 ? this.moviesList : this.emptyMovie
                }
            </div>
        )
    }
}

MoviesList.propTypes = {
    movies:PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        movies:state.movieReducer
    }
}
export default connect(mapStateToProps)(MoviesList);