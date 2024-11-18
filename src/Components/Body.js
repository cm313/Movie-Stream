import React from 'react'
import ShimmerUI from "./ShimmerUI"
import MovieCard from "./MovieCard"
import useFetchMovieData from '../CustomHooks/useFetchMovieData';
const Body = () => {

  const listOfMovies = useFetchMovieData();

  return (
   listOfMovies.length === 0 ? <ShimmerUI/>:
    <div className="flex flex-wrap ml-10">
      {
        listOfMovies.map((movieData)=>(
         <MovieCard key = {movieData.id} movieInfo = {movieData}/>
        )
        )
      }
    </div>
  )
}

export default Body