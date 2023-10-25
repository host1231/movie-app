import { useLocation, Link } from "react-router-dom";
import Rating from "../Rating";
import "./MovieDetails.scss"

function MovieDetails () {
    const {state} = useLocation();

    return (
        <section className="movie-details">
            <div className="container">
                <div className="movie-details__inner">
                    <img className="movie-details__img" src={state.large_cover_image} alt={state.title} />
                    <div className="movie-details__content details-content">
                        <h2 className="details-content__title">{state.title_long}</h2>
                        <Rating rating={state.rating} />
                        <div className="details-content__genres">|
                            {state.genres.map(el => <span key={el}>{el}|</span>)}
                        </div>
                        <div className="details-content__runtime">{state.runtime} мин</div>
                        <p className="details-content__text">{state.description_full.slice(0, 600)}</p>
                        <Link className="details-content__btn" to={state.torrents[0].url ? state.torrents[0].url : ''}>Скачать</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;