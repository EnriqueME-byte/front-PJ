import { useFetch } from "../../hooks/useFetch"
import "../../estilos/dashboard.css";
import { useEffect, useState } from "react";


export const Informacion = () => {


    const [accion, setAccion] = useState({
        url : "http://127.0.0.1:8080/api/solicitud",
        id :""
    });

    const {url,id} = accion;

    useEffect(()=>{
       
    },[url]);

    const { datos } = useFetch(url, '3', {});
    
    const borraS = (id) => {
       /* setAccion({
            url : `http://127.0.0.1:8080/api/solicitud/${id}`,
            id : id
        });*/
    }

    return (
        <>
            {datos &&
                <table>
                    <thead>
                        <tr>
                            <th>Id solicitud</th>
                            <th>Nombre Solicitante</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Activo</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.data.map(solicitud => {
                                return(
                                    <tr key = {solicitud.id_solicitud}>
                                        <th>{solicitud.id_solicitud}</th>
                                        <th>{solicitud.nombre_solicitante}</th>
                                        <th>{solicitud.paterno_solicitante}</th>
                                        <th>{solicitud.materno_solicitante}</th>
                                        <th>{solicitud.activo}</th>
                                        <th>{solicitud.fecha}</th>
                                        <th>
                                            <button onClick={() => borraS(solicitud.id_solicitud)}>Borrar</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            }
        </>
    )
}