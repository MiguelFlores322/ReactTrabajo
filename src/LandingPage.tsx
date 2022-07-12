import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO, pelicula } from "./peliculas/peliculas.model";

export default function LandingPage(){
   
    //Como queremos cambiar el valor de una variable y renderizar el componente
  //Usaremos estados                //Queremos que sea un objeto que tenga propiedades de cartelera        
  const [peliculas, setPeliculas] = useState<landingPageDTO>({})
  //Debemos crear este para poder implementar un useEffect, pasaremos el tiempo en se ejecutara la funcion
  //efecto secundario del componente, por ello debemos colocarlo en un use effect
  useEffect(() => {
    //identificador de timer
    const timerId = setTimeout(() => {
      setPeliculas({ enCartelera: peliculasEnCartelera, proximosEstrenos: peliculasProximosEstrenos })
    }, 500);
    //Para que no tengamos un nuevo Id
    return () => clearTimeout(timerId);
  });


  const peliculasEnCartelera: pelicula[] = [
    {
      id: 1,
      titulo: "Spiderman sin camino a casa",
      poster: `https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX540_.jpg`
    },
    {
      id: 2,
      titulo: "Moana",
      poster: `https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg`
    },
    {
      id: 3,
      titulo: "Mohaan Aawatey",
      poster: `https://m.media-amazon.com/images/M/MV5BOTYyZGQ4MDgtYTA4MC00MzUxLTg3NzItMDQ5Y2E1NTNhYmYxXkEyXkFqcGdeQXVyMTM3MTQ3ODEw._V1_FMjpg_UX1200_.jpg`
    }]

  const peliculasProximosEstrenos: pelicula[] = [
    {
      id: 1,
      titulo: "Terminator 2: El juicio final",
      poster: `https://m.media-amazon.com/images/M/MV5BNTM1ZTZhNWQtOTM5MS00MzA4LWEwNGEtMzc5MzA5ODE1ZWQ5XkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_FMjpg_UX729_.jpg`
    },
    {
      id: 2,
      titulo: "Mohana",
      poster: `https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX540_.jpg`
    },
    {
      id: 3,
      titulo: "Spiderman sin camino a casa",
      poster: `https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX540_.jpg`
    }

  ]
    return(
        <>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />
        <h3>Proximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}