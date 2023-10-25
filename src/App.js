import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Favourites from "./components/Favourites";
import MovieSearch from "./components/MovieSearch";

function App () {
  const [favouritesList, setFavouritesList] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favouritesList'));
    if (data !== null ) setFavouritesList(data);
    
}, []);

  const saveToFavouritesList = (newFavouritesList) => {
    localStorage.setItem('favouritesList', JSON.stringify(newFavouritesList));
  }   

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Movies favouritesList={favouritesList} setFavouritesList={setFavouritesList} saveToFavouritesList={saveToFavouritesList} />} />
        <Route path="/favourites" element={<Favourites favouritesList={favouritesList} setFavouritesList={setFavouritesList} saveToFavouritesList={saveToFavouritesList} />} />
        <Route path="/movie/:id" element={<MovieDetails />}/>
        <Route path="/favourites/movie/:id" element={<MovieDetails />}/>
        <Route path="/movie-search/movie/:id" element={<MovieDetails />}/>
        <Route path="/movie-search" element={<MovieSearch favouritesList={favouritesList} setFavouritesList={setFavouritesList} saveToFavouritesList={saveToFavouritesList} />} />
      </Routes>
    </Router>
  )
}

export default App;
