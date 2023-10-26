import React from "react";
import { Link } from 'react-router-dom';
import Rating from "../Rating";
import "./Movie.scss";

function Movie({ movie, handleFavouritesList, favouritesComponent, isActive }) {
    return (
        <Link to={`movie/${movie.id}`} state={movie}>
            <article className="movie" >
                <img className="movie__img" src={movie.medium_cover_image} alt={movie.title} onClick={() => window.scroll(0, 0)} />
                <Rating rating={movie.rating} />
                <div className="movie__content movie-content" onClick={() => window.scroll(0, 0)}>
                    <h3 className="movie-content__title">{movie.title_long}</h3>
                    <div className="movie-content__genres">
                        {
                            movie.genres.map(genre => 
                            <p key={genre}>|{genre}|</p>
                        )
                        }
                    </div>
                </div>
                <Link to="#">
                    <div className={`movie__overlay ${isActive ? 'active' : '' }`} onClick={() => handleFavouritesList(movie)}>
                        {favouritesComponent}
                    </div>
                </Link>
            </article>
        </Link>
    )
};

export default Movie;