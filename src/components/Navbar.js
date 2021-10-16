import { Link } from "react-router-dom";
import { routers } from "../router";
import { MyContext } from "../context/context";
import { useContext } from "react";
import { NavBar } from "./styles/Styled";
import { useHistory } from "react-router";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function Navbar() {
  const { cartMovies } = useContext(MyContext);
  const history = useHistory();

  const exit = () => {
    history.push('/');
  }

  return (
    <NavBar>
      <nav id='navbar-principal' class="navbar navbar-expand-sm navbar-dark" style={{ height: '50px', width: '100%' }}>

        <div class="container-fluid">
          <div className="nav--logo">
            <h3> Blockflix </h3>
          </div>

          <section className="mid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {routers
                  .filter((route) => route.isVisible)
                  .map((route) => {
                    return (
                      <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to={route.path}>
                          {route.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>

           
          </section>
         
          <div className='items'>
          <div className='item' >
            <h2>{cartMovies.length} item(s)</h2>
            <ShoppingCartIcon className='shop-item'/>
          </div>

          <div className='exit-item'>
            <ExitToAppIcon onClick={exit}/>
          </div>
        </div>
        </div>
      </nav>
    </NavBar>
  );
}


