import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css"
import CargandoComponente from "./../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function Listadopeliculas(props: listadoPeliculasProps) {


    return (
        <ListadoGenerico listado={props.peliculas}>
        <div className={css.div}>
            {props.peliculas?.map(peli =>
                <PeliculaIndividual pelicula={peli} key={peli.id}
                />
            )}
        </div>
        </ListadoGenerico>
    )
}
interface listadoPeliculasProps {
    peliculas?: pelicula[]
}