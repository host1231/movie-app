import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "../Movie";
import AddToFavourites from "../Favourites/AddToFavourites";
import "./MovieSearch.scss";

function MovieSearch ({ favouritesList, setFavouritesList, saveToFavouritesList }) {
    const [searchMovieList, setSearchMovieList] = React.useState([]);
    const [value, setValue] = React.useState('');

    const getMovie = async (value) => {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=35&query_term=${value}`);
        const {data: {movies}} = await res.json();
        setSearchMovieList(movies);
    }

    React.useEffect(() => {
    }, [])
    
    const handleSearchMovie = (e) => {
        e.preventDefault();
        getMovie(value.toLowerCase());
    }

    const addToFavouritesList = (movie) => {
        const newFavouritesList = [...favouritesList, movie];
        setFavouritesList(newFavouritesList);
        saveToFavouritesList(newFavouritesList);
    }

    return (
        <section className="movie-search">
            <div className="container">
                <div className="movie-search__inner">
                    <h2 className="movie-search__title">Поиск фильма</h2>
                    <form className="movie-search__form search-form" onSubmit={handleSearchMovie}>
                        <input className="search-form__input" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Название фильма ..." />
                        <button className="search-form__btn" type="submit">
                            <SearchIcon />
                        </button>
                    </form>
                    <ul className="movie-search__list">
                        {
                            searchMovieList ?
                                searchMovieList.map(el => 
                                    <li key={el.id} className="movie-search__item">
                                        <Movie movie={el} handleFavouritesList={addToFavouritesList} favouritesComponent={<AddToFavourites />} isActive={favouritesList.includes(el)} />
                                    </li>    
                                ) :
                                <h3 className="not-found">Такого фильма нет!!!</h3>
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MovieSearch;