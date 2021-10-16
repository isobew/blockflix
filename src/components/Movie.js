import React from "react";
import { Card } from "./styles/Styled";
import ShoppingButton from './ShoppingButton';


export default function Movie({ movie, history, addCartMovies }) {
  const goToMovie = () => history(movie.id);

  const onClickAddCartMovies = () => {
    addCartMovies(movie);
  };

  return (
    <Card>

      <div>
        <img onClick={goToMovie}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={""} />
      </div>

    
      <div className="movie-info">
        <h5 onClick={goToMovie}>
          {movie.title}
        </h5>
        <div className='sub-info'>
          <ShoppingButton onClick={onClickAddCartMovies} />
          <span className="tag">
            R$ {((movie.vote_average) * 10).toFixed(2)}
          </span>
        </div>
      </div>


    </Card>
  );
}

