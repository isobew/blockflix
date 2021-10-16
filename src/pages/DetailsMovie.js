import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { MyContext } from "../context/context";
import ApiTmdb from "./ApiTmdb";
import Navbar from "../components/Navbar";
import { BtnRent } from "../components/styles/Btn";
import { DetailMovie } from "../components/styles/Styled";
import ShoppingButton from "../components/ShoppingButton";



export default function DetailsMovie() {
  const { addCartMovies } = useContext(MyContext);


  const [movie, setMovie] = useState(null);
  const [movieElenc, setMovieElenc] = useState(null);
  const [movieRecom, setMovieRecom] = useState(null);

  const params = useParams();

  const onClickAddCartMovies = () => {
    console.log("olha esse ")
    addCartMovies(movie);
  };

  useEffect(() => {

    const run = async () => {
      setMovie(await ApiTmdb.getMovie(params.idMovie));
      setMovieElenc(await ApiTmdb.getMovieElenc(params.idMovie));
      setMovieRecom(await ApiTmdb.getMovieRecom(params.idMovie));
    };

    run();
  }, [params.idMovie]);



  if ((movie === null) || (movieElenc === null) || (movieRecom === null)) {
    return <h1>Carregando...</h1>;
  }


  return (
    <section className="featured">
      <Navbar />
      <DetailMovie className="featured--vertical">
        <div className="featured--horizontal">

          <section className='info-principal'>

            <section className='left-side'>

              <div className="featured--name">
                <h2> {movie.title} </h2>
              </div>

              <div className='first-block'>
                <div className="featured--points">
                  {movie.vote_average} pontos
                </div>

                <div className="featured--year">
                  {movie.release_date}
                </div>

                <div>
                  Duração: {movie.runtime}
                </div>
              </div>

              <div className='genres'>
                <h4>Gênero(s):</h4> {movie.genres.map((genre, index) =>
                  <p key={genre.name}>  {genre.name}{index === movie.genres.length - 1 ? "" : ","}</p>
                )}
              </div>

            </section>

            <section className='right-side'>
        <div className='back-shop-item'>
             
              <div className="featured--buttons">
                <p className='price'>
                  R$ {(movie.vote_average * 10).toFixed(2)}
                </p>

                <span>Alugar</span>
                <ShoppingButton onClick={onClickAddCartMovies} />
              </div>

              </div>

            </section>

          </section>


          <div className="feactured--description">
            <h3>Resumo:</h3> {movie.overview}
          </div>


          <h3>Atores:</h3>
          <div className='cast'>
            {movieElenc.cast.map((cast, index) => {
              return <div className='cast-info'><img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt={""} />{index === movieElenc.cast.length - 1 ? "" : ""} <p key={cast.name}> {cast.name}</p></div>
            })}
          </div>

          <div className='movie-recommend'>
            <h3 className='recommend-title'>Filmes recomendados:</h3> {movieRecom.results.map((results, index) => {
              return <div className='recommend'><img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={""} /> <p className='recommend-info' key={results.original_title}><h3>{results.original_title}</h3> {results.overview}{index === movieRecom.results.length - 1 ? "" : ""}</p></div>
            })}
          </div>

        </div>
      </DetailMovie>
    </section >
  );
}


