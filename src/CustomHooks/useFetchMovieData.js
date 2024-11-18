import {useState, useEffect}  from 'react'

const useFetchMovieData = () => {

  const[listOfMovies, setListOfMovies] = useState([]);
  useEffect(()=>{
      fetchMoviesData();
  },[])
 
 const fetchMoviesData = async()=>{
   const data = await fetch("https://dummyapi.online/api/movies");
   const jsonData = await data.json();
  setListOfMovies(jsonData);
 }
  return (
    listOfMovies
  )
}

export default useFetchMovieData