import React from "react";
import Movie from '../Movie';
import "./Movies.scss";

function Movies () {
    const [data, setData] = React.useState([]);
    
    const getData = async () => {
        const res = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        const {data: {movies}} = await res.json();
        setData(movies);
    }
    
    React.useEffect(() => {
        getData();
    }, []);

    return (
        <section className="movies">
            <div className="container">
                <div className="movies__inner">
                    <h2 className="movies__title">Фильмы</h2>
                    <ul className="movies__list">
                        {
                            data.map(movie => 
                                <li key={movie.id} className="movie__item" >
                                    <Movie  movie={movie} />
                                </li>    
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Movies;