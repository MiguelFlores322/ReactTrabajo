
import './App.css';
import Menu from './utils/Menu';
import IndiceGeneros from './generos/indiceGeneros';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import rutas from "./route-config"

function App() {
  return (

    <>
      <BrowserRouter>
      <Menu />
      {/* El que agrega los margenes laterales, esta en todas pastes */}
      <div className='container'>
        {/* Este sera el que permite mostrar un componenten u otro segun la ruta, en la que se encuentre el usuario */}
        <Switch>
          {/* Este sera el que encapsule el contenido 
          Cuando en la URL ESTE EL PATH VACIO, entonces mostraremos el lsitado de peliculas
          */}
          {rutas.map(ruta => 
          <Route key={ruta.path} path={ruta.path} 
          exact={ruta.exact}> <ruta.componente/>
          </Route>
          )}


        </Switch>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
