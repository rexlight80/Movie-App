import React,{useState,useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

const App=()=> {
  const [movies, setMovies] = useState([]);
  const [favourites,setFavourites]=useState([]);
  const [value,setValue]=useState("");
  


  useEffect(()=>{
      fetchMovieRequest(value)
  },[value]);

  useEffect(()=>{
   
    const favouriteMovies=[];
    favouriteMovies.push(
    JSON.parse(
      localStorage.getItem("favourite-movies")));
      

    setFavourites(favouriteMovies);
   
  },[]);

 

  const fetchMovieRequest= async (value)=>{
    const url=`http://www.omdbapi.com/?s=${value}&apikey=2bf0eea4`;
    const response= await fetch(url);
    const data =  await response.json();
    if(data.Search){
    setMovies(data.Search)
    }
  }

  const addFavouriteMovie=(movie)=>{

    const addNewFavouriteList=[...favourites,movie];
        setFavourites(addNewFavouriteList);
        saveToLocalStorage(movie);
        
  }

  const removeFavouriteMovie=(movie)=>{
    const newFavouriteList=favourites.filter(favourite=>favourite.imdbID !==movie.imdbID)
          setFavourites(newFavouriteList)
          saveToLocalStorage(newFavouriteList);
  }

  const saveToLocalStorage=(item)=>{
          localStorage.setItem("favourite-movies",JSON.stringify(item))
  }
  return (
   
   <div className="container-fluid movie-app">
   <div className="row d-flex align-items-center">
   <MovieListHeader heading="Movies"/>
   <SearchBox value={value}  setValue={setValue}/>
   </div>
   
   <div className="row ">
   <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites}/>
</div>
   <div className="row d-flex align-items-center">
   <MovieListHeader heading="Favourites"/>   
   </div>
   <div className="row">
   <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
   </div>
   </div>
   
  );
}

export default App;
