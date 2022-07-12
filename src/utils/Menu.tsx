import { NavLink } from "react-router-dom";


export default function Menu(){
    const claseActiva = "active";
    //Ahora nosotros cambiaremos los a por NavLink de react, con ello sera mas facil
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand"  href="/">React Peliculas</a> */}
                <NavLink className="navbar-brand" 
                activeClassName={claseActiva}  
                to="/" >React Peliculas</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                       {/* <a className="nav-link" href="/generos"> Generos</a> */}
                       <NavLink className="nav-link" activeClassName={claseActiva} to="/generos" >
                        Generos
                        </NavLink>

                    </li>

                </ul>


            </div>
            </div>

        </nav>
    )
}