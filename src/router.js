
import Login from "./pages/login/Login";
import MovieListing from "./pages/MovieListing";
import DetailsMovie from "./pages/DetailsMovie";
import Checkout from "./pages/Checkout";
import LatestOrders from "./pages/LatestOrders";


export const routers = [
  {
    path: "/movieListing",
    component: MovieListing,
    title: "Lista de Filmes",
    isVisible: true,
    isPrivate: true,
  },

  {
    path: "/checkout",
    component: Checkout,
    title: "Checkout",
    isVisible: true,
    isPrivate: true,
  },

  {
    path: "/latestOrders",
    component: LatestOrders,
    title: "Últimos Pedidos",
    isVisible: true,
    isPrivate: true,
  },

  {
    path: "/detailsMovie/:idMovie",
    component: DetailsMovie,
    title: "Details of a Movie",
    isVisible: false,
    isPrivate: true,
  },

   
  {
    path: "/",
    component: Login,
    title: "Login",
    isVisible: false,
    isPrivate: false,
  }
];