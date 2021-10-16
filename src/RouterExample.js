import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routers } from "./router";
import { useContext} from 'react';
import { MyContext } from "./context/context";


function RoutePersonal(props){

    const { isLogged } = useContext(MyContext);
    console.log(isLogged)
    
    if(props.isPrivate && !isLogged){
      return <Redirect to="/" exact />;
    }
  
    
    return <Route {...props} />;
  
  
  }

function RouterExample() {


  return (
    <BrowserRouter>
      <Switch>
        {routers.map((route) => {
          const Component = route.component;
          return (
            <RoutePersonal 
             key={route.path}
             path={route.path}
             isPrivate={route.isPrivate}>
             <Component />
            </RoutePersonal>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}


export default RouterExample;


