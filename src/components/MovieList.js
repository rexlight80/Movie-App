import React from 'react'


function MovieList({movies,favouriteComponent,handleFavouritesClick}) {
    const FavouriteComponent= favouriteComponent;
    return (
        <>
        {
              movies.map(movie=>(
                  <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
                <img  src={movie.Poster} alt="movie poster"/>
                <div onClick={()=>handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content">
                <FavouriteComponent/>
                </div>
                </div>
              ))
        }
          </>  
        
    )
}

export default MovieList
