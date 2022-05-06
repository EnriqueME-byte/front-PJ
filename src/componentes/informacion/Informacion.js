import { useFetch } from "../../hooks/useFetch"
import { useEffect, useReducer, useState } from "react";
import "../../estilos/dashboard.css";
import { ModalEdita } from "../modales/ModalEdita";
import { modalReducer } from "../../auth/modalReducer";

export const Informacion = () => {

    const [accion, setAccion] = useState({
        url: "http://127.0.0.1:8080/api/solicitud",
        verbo: "3",
        id: "",
        muestra: false
    });

    const [solicitud,setSolicitud] = useState({
        solicitante : {},
        indice : ''
    });

    const [modal,dispatch] = useReducer(modalReducer,false);

    const { url, verbo, id, muestra } = accion;

    const { datos } = useFetch(url, verbo, {});

    useEffect(() => {
    }, [url]);

    const borraS = (id, i) => {
        setAccion({
            url: `http://127.0.0.1:8080/api/solicitud/${id}`,
            verbo: '2',
            id: id
        });
        datos.data.splice(i, 1);
    }

    const editaS = (solicitante, i) => {
        const accion = {
            type : "mostrar",
            payload : true
        }
        document.querySelector('body').style.overflowY = "hidden";
        dispatch(accion);
        setSolicitud({
            solicitante : solicitante,
            indice : i
        });
    }

    

    return (
        <div className="cont-table">
            {
                modal &&
                    <ModalEdita 
                        solicitante={solicitud} 
                        dispatch = {dispatch} 
                        data = {datos}
                    />
            }
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
                            datos.data.map((solicitud, i) => {
                                return (
                                    <tr key={solicitud.id_solicitud}>
                                        <th>{solicitud.id_solicitud}</th>
                                        <th>{solicitud.nombre_solicitante}</th>
                                        <th>{solicitud.paterno_solicitante}</th>
                                        <th>{solicitud.materno_solicitante}</th>
                                        <th>{solicitud.activo}</th>
                                        <th>{solicitud.fecha}</th>
                                        <th>
                                            <button onClick={() => editaS(solicitud, i)} className="btn-accion edita">Editar</button>
                                            <button onClick={() => borraS(solicitud.id_solicitud, i)} className="btn-accion borra">Borrar</button>
                                        </th>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            }
        </div>
    )
}