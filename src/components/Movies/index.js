import React from "react";
import Movie from '../Movie';
import Skeleton from '../Movie/Skeleton';
import AddToFavourites from "../Favourites/AddToFavourites";
import CustomPagination from "../Pagination/CustomPagination";
import "./Movies.scss";

function Movies({ favouritesList, setFavouritesList, saveToFavouritesList }) {
    const [data, setData] = React.useState([]);
    const [visible, setVisible] = React.useState(true);
    const [page, setPage] = React.useState(1);
    console.log(page)


    const getData = async () => {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&page=${page}`);
        const { data: { movies } } = await res.json();
        setData(movies);
    }

    React.useEffect(() => {
        getData();
        setVisible(true);
        setTimeout(() => setVisible(false), 2500);
    }, [page]);


    const addToFavouritesList = (movie) => {
        const newFavouritesList = [...favouritesList, movie];
        setFavouritesList(newFavouritesList);
        saveToFavouritesList(newFavouritesList);
    }

    return (
        <section className="movies">
            <div className="container">
                <div className="movies__inner">
                    <h2 className="movies__title">Лучшие фильмы</h2>
                    <ul className="movies__list">
                        {
                            data.map(movie =>
                                <li key={movie.id} className="movie__item" >
                                    {
                                        visible ?
                                            <Skeleton /> :
                                            <Movie movie={movie} handleFavouritesList={addToFavouritesList} favouritesComponent={<AddToFavourites />} isActive={favouritesList.includes(movie)} />
                                    }
                                </li>
                            )
                        }
                    </ul>
                    {
                        !visible &&
                            <CustomPagination page={page} setPage={setPage} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Movies;