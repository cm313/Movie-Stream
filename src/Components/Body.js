import React from 'react'
import useEffect from "react";

const Body = () => {
 
  useEffect(()=>{
      fetchMoviesData();
  },[])
 
 const fetchMoviesData = async()=>{
   const data = await fetch("https://dummyapi.online/api/movies");
   const jsonData = await JSON.data();
   console.log(jsonData);
 }

  return (
    <div>

    </div>
  )
}

export default Body