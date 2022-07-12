import { ReactElement } from "react";
import CargandoComponente from "./Cargando";

export default function ListadoGenerico(props: ListadoGeenricoProps){
    //Si el listaod es indefinido
    if(!props.listado){
        //Si el usuario definio una interfaz personalisada para cuando este cargando
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        //de lo contrario mostramos el contenido por defecto mientrar carga
        return <CargandoComponente/>
     //si esta vacio el arreblo
    }else if(props.listado.length === 0){
        //Si no es indefinido, la interfaz que queremos mostrar cuando este vacio
        if(props.listadoVacioUI){
            return props.listadoVacioUI;
        }
        //de lo contrario (mensaje predeterminado)
        return <>No hay elementos para mostrar</>
    }else{
        return props.children;
    }

}
interface ListadoGeenricoProps {
    listado: any;
    children: ReactElement;
    //Lo que queremos mostrar cuando el listado esta cargando
    cargandoUI? : ReactElement;
    //Lo Queremos mostrar cuando el listado sea vacio
    listadoVacioUI?: ReactElement;
}