import { useContext } from "react";
import Navbar from "../components/Navbar";
import { MyContext } from "../context/context";
import { LatestOrder } from "../components/styles/Styled";

export default function LatestOrders() {

    const { latestOrders } = useContext(MyContext);

    if (latestOrders.length === 0) {
        return (
            <div>
                <Navbar />
                <h1>Sem histórico de compras</h1>
            </div>
        )

    }


    return (
        <>
            <Navbar />
            <LatestOrder>
                <h1>Últimas Compras:</h1>
                {latestOrders.map((movie) => (
                    <div className='purchase' key={movie.number}>
                        {/* {console.log(movie)} */}
                        <h2 className='purchase-number'> Número da Compra: {movie.number}</h2> 
                        {movie.movies.map((movie) => (
                            <div className='purchase-info'>
                                <li>{movie.title}</li>
                                <p className='purchase-price'>R$ {((movie.vote_average) * 10).toFixed(2)}</p>
                            </div>
                        ))}

                        <h2 className='total-price'>Total: R${(movie.totalCar).toFixed(2)}</h2>

                    </div>
                ))}
            </LatestOrder>
        </>
    );
};