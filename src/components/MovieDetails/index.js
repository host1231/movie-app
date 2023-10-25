import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Rating from "../Rating";
import "./MovieDetails.scss"

function MovieDetails() {
    const [visible, setVisible] = useState(false);
    const { state } = useLocation();

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
                        <div className="details-content__btn details-btn">
                            <button className="details-btn__trailer" onClick={() => setVisible(true)} >Трейлер</button>
                            <Link className="details-btn__download" to={state.torrents[0].url ? state.torrents[0].url : ''}>Скачать</Link>
                        </div>
                    </div>
                    {
                        visible &&
                        <div className="movie-details__trailer movie-trailer">
                            <div className="movie-trailer__inner">
                                <button className="movie-trailer__close-btn" onClick={() => setVisible(false)}><CloseIcon /></button>
                                <video className="movie-trailer__video" src="https://media.istockphoto.com/id/1407727602/video/under-water-sun-light-seamless-loop-background.mp4?s=mp4-640x640-is&k=20&c=cfkBSXInyVorQTaHLJ600a4CIGqBu13O9Rb25NIFJo4=" alt="" controls />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;