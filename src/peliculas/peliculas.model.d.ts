export interface pelicula{
    id: number;
    titulo: string ;
    poster: string;
}
//interface que tendra las caracteristicas del landingPageDTO
//Es decir va a recibir dos parametros que son dos arreglos
export interface landingPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}