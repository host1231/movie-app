import "./Rating.scss";

function Rating({ rating }) {
    return (
        <div className="movie__rating movie-rating">
            <span className="movie-rating__current">{rating}</span>
            <span className="movie-rating__quantity"> / 10 </span>
        </div>
    )
}

export default Rating;