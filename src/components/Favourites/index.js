import Movie from "../Movie";
import RemoveToFavourites from "./RemoveToFavourites";
import "./Favourites.scss";

function Favourites({ favouritesList, setFavouritesList, saveToFavouritesList }) {

    const removeFavouritesList = (movie) => {
        const newFavouritesList = [...favouritesList].filter(prev => prev.id !== movie.id);
        setFavouritesList(newFavouritesList);
        saveToFavouritesList(newFavouritesList);
    }
    
    return (
        <section className="favourites">
            <div className="container">
                <div className="favourites__inner">
                    <h2 className="favourites__title">Избранные фильмы</h2>
                    {
                        !favouritesList.length ?
                            <h3>У вас нет избранных фильмов!!!</h3> :
                            <ul className="favourites__list">
                                {
                                    favouritesList.map((movie, idx) =>
                                        <li key={idx} className="favourites__item">
                                            <Movie movie={movie} handleFavouritesList={removeFavouritesList} favouritesComponent={<RemoveToFavourites />} />
                                        </li>
                                    )
                                }
                            </ul>
                    }
                </div>
            </div>
        </section>


    )
}

export default Favourites;