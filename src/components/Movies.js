import React, { useContext, useState } from 'react';
import { useEffect } from "react";
import { MyContext } from "../context/context";
import ApiTmdb from '../pages/ApiTmdb';
import Movie from './Movie';
import { useHistory } from "react-router-dom";
import { Container } from  "./styles/Styled";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const getMovies = async () => {
  const response = await ApiTmdb;
  return response.data;
};

export default function Movies({ movies, setMovies }) {


  const { cartMovies, addCartMovies } = useContext(MyContext);

  const history = useHistory();

  const run = async () => {
    setMovies(await getMovies);
  };

  useEffect(() => {
    run();
  }, []);

  const goDetailsMovie = (idMovie) => {
    console.log('id video' + idMovie)
    history.push(`/detailsMovie/${idMovie}`);
  };

  return (
    

    <Container>

        {movies.results.length > 0 && movies.results.map((movie, key) =>
          <div key={key}>
            <Movie
              key={movie.id}
              movie={movie}
              title={movie.title}
              movies={movie.movies}
              history={goDetailsMovie}
              addCartMovies={addCartMovies}
            />
          </div>
        )}
    </Container>
  );
}
