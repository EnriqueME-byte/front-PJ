
import "../../estilos/modales.css";
import { useFormulario } from "../../hooks/useFormulario";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useReducer, useState } from "react";
import { modalReducer } from "../../auth/modalReducer";

export const ModalEdita = ({solicitante, dispatch, data}) => {

    console.log(solicitante);
   
    const [form,cambiarInput] = useFormulario({
        id_solicitud : solicitante.solicitante.id_solicitud,
        nombre_solicitante : solicitante.solicitante.nombre_solicitante,
        paterno_solicitante : solicitante.solicitante.paterno_solicitante,
        materno_solicitante : solicitante.solicitante.materno_solicitante,
        activo : solicitante.solicitante.activo
    });

    const {nombre_solicitante, paterno_solicitante,materno_solicitante,activo} = form;

    const cancelar = () => {
       dispatch(false);
       document.querySelector('body').style.overflowY = "auto";
    }

    const [cuerpo,setCuerpo] = useState({
        url : '',
        body : {}
    });

    const {url,body} = cuerpo;

    const actualizar = () => {
        setCuerpo({
            url : 'http://127.0.0.1:8080/api/solicitud',
            body : form
        });
        setTimeout(()=>{
            dispatch(false);
        },100);
        data.data[solicitante.indice] = form;
        document.querySelector('body').style.overflowY = "auto";
    }


    const {datos} = useFetch(url,'4',body);

    return (
        <div className="capa">
            <div className="modal-form">
                <h2>Editar solicitud</h2>
                <input
                    type="text"
                    placeholder="Nombre del solicitante"
                    name="nombre_solicitante"
                    value={nombre_solicitante}
                    onChange={cambiarInput}
                />
                <input
                    type="text"
                    placeholder="Apellido Paterno"
                    name="paterno_solicitante"
                    value={paterno_solicitante}
                    onChange={cambiarInput}
                />
                <input
                    type="text"
                    placeholder="Apellido Materno"
                    name="materno_solicitante"
                    value={materno_solicitante}
                    onChange={cambiarInput}
                />
                <input
                    type="number"
                    placeholder="Activo ( 0 o 1)"
                    name="activo"
                    value={activo}
                    onChange={cambiarInput}
                />

                <div btn-cont>
                    <button onClick = {actualizar} className="btn-modal acepta">Aceptar</button>
                    <button onClick={cancelar} className="btn-modal cancela">Cancelar</button>
                </div>
            </div>
        </div>
    )
}