import React from 'react'

const MovieCard = (props) => {
  console.log(props);
  const {id, movie, Rating, image, imdb_url} = props?.movieInfo;
  console.log(movie);

  return (
    <div className="w-[25%] px-2 py-4 bg-gray-400 m-10 rounded-lg">
      <div className="font-semibold">{id}</div>
      <div className="text-red-700">{movie}</div>
      <div>{Rating}</div>
      <div>{image}</div>
      <a href={imdb_url} target="_blank">
      <div className="text-blue-700">{imdb_url}</div>  
        </a>
    </div>
  )
}

export default MovieCard