import { useContext, useMemo } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/Navbar";
import { BtnCheck, BtnDel } from "../components/styles/Btn";
import { MyContext } from "../context/context";
import { CheckoutStyle } from "../components/styles/Styled";

export default function Checkout() {
  const { cartMovies, delMovie, totalCar, addLatestOrders } = useContext(MyContext);

  const history = useHistory();


  const onClickDeltMovies = (movie) => {
    delMovie(movie);
  };

  const salvLatestOrders = () => {
    addLatestOrders();
    history.push("/latestOrders")
  }




  return (
    <CheckoutStyle>
      <Navbar />
      <h1>Checkout</h1>
    <section className='checkout-container'>
      <ul>
        {cartMovies.map((movie) => {
          return <li key={movie.id} className='shop-item-list'>
            <div className='list-item'>
              
              <span className='movie-name'>{movie.title}</span>
              <span className='price'>
              R${((movie.vote_average) * 10).toFixed(2)}
              </span>
            </div>
            <div>
              <td><BtnDel onClick={() => onClickDeltMovies(movie.id)} value={movie.id}>Excluir</BtnDel></td><br />
            </div>
          </li>;
        })}
      </ul>
      <div>
        <p className='total-price'>Total: R$ {totalCar.toFixed(2)}</p>
        <BtnCheck onClick={salvLatestOrders}>ALUGAR</BtnCheck>
      </div>
      </section>

    </CheckoutStyle>
  );
}
