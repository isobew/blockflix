import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import ApiTmdb from "./ApiTmdb";
import Navbar from "../components/Navbar";
import { Release } from '../components/styles/Styled'

function MovieListing() {
  const [movieListing, setMovieListing] = useState([]);
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);
  


  useEffect(() => {
    const loadReleases = async () => {
      let list = await ApiTmdb.getHomeList();
      console.log(list);
      setMovieListing(list);
    }

    loadReleases();
  }, []);
  
  return (
    <Release className='lists'>
      <Navbar />
      {/*moviesByCategoryList*/}
      <h1>Lançamentos</h1>
      
      <div>
        {movieListing.length > 0 && movieListing.map((movie, key) => (

        < Movies
          key={movie.id}
          movie={movie}
          title={movie.title}
          movies={movie.items}
          setMovies={setMovies}
          price={movie.vote_average}
          descreption={movie.overview}
        />
        ))}
      </div>
      
    </Release>
  )
}

export default MovieListing;
