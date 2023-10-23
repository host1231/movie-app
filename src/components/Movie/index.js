import "./Movie.scss";

function Movie({movie}) {
    return (
        <article className="movie">
            <img className="movie__img" src={movie.medium_cover_image} alt={movie.title} />
            <div className="movie__rating movie-rating">
                <span className="movie-rating__current">{movie.rating}</span>
                <span className="movie-rating__quantity"> / 10 </span>
            </div>
            <div className="movie__content movie-content">
                <h3 className="movie-content__title">{movie.title_long}</h3>
                <div className="movie-content__genres">
                    {
                        movie.genres.map(genre => <p key={genre}>|{genre}|</p>)
                    }
                </div>
            </div>
        </article>
    )
};

export default Movie;