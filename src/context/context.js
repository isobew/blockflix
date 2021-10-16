import React, { createContext, useMemo, useState } from "react";
export const MyContext = createContext();

export function MyProvider({ children }) {
  const [cartMovies, setCartMovies] = useState(localStorage.moviesList === undefined ? [] : JSON.parse(localStorage.getItem("moviesList")));
  const [ latestOrders, setLatestOrders ] = useState(localStorage.latestOrders === undefined ? [] : JSON.parse(localStorage.getItem("latestOrders")));
  const [isLogged, setIsLogged] = useState(false);

  
  const totalCar = useMemo(() => {
    let data = 0;
    cartMovies.forEach((movie) => {
      data += (movie.vote_average.toFixed(2))*10 ;
    })
       
    return data;
  
  }, [cartMovies]);

  

  const addCartMovies = (movie) => {
    setCartMovies((prevState) => {
      if (prevState.find((p) => p.id === movie.id)) {
        return prevState;
      }

      const concatMovie = prevState.concat(movie);
      localStorage.setItem('movieList', JSON.stringify(concatMovie));
      return concatMovie;
    });
  };
  

  const delMovie = ((id) => {
    console.log(id)
    setCartMovies((prevState)=>{
      const filterMovie = prevState.filter((movie)=>
             movie.id !== id)
             localStorage.setItem('movieList', JSON.stringify(filterMovie));
             return filterMovie;
        });
        
      });
   


  const addLatestOrders = () => {
    setLatestOrders((prevState) => prevState.concat({ number: parseInt(Math.random() * 100),
        movies: cartMovies,
        totalCar: totalCar}))
    const orderList = localStorage.latestOrders === undefined ? [] : JSON.parse(localStorage.getItem("latestOrders"))
    orderList.push({
        number: parseInt(Math.random() * 100),
        movies: cartMovies,
        totalCar: totalCar 
         
    })
    localStorage.setItem('latestOrders', JSON.stringify(orderList))
    localStorage.setItem('moviesList', "[]")
    
    setCartMovies([]);
  }

  return (
    <MyContext.Provider
      value={{
        cartMovies,
        addCartMovies,
        delMovie,
        totalCar,
        isLogged,
        setIsLogged,
        addLatestOrders,
        latestOrders,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

