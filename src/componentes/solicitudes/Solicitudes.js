import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFormulario } from "../../hooks/useFormulario"


export const Solicitudes = () => {

    const [form,cambiarInput] = useFormulario({
        nombre_solicitante : "",
        paterno_solicitante : "",
        materno_solicitante : "",
        activo_solicitante : ""
    });


    const [url,setUrl] = useState('');

    const {datos} = useFetch(url,'1',form);

    const {nombre_solicitante, paterno_solicitante,materno_solicitante,activo} = form;

    const cargarSolicitud = (e) => {
        e.preventDefault();
        setUrl('http://127.0.0.1:8080/api/solicitud');
    }

    return (
        <form onSubmit={cargarSolicitud}>
            <div className="container-login">
                <h3>Ingresar Solicitud</h3>
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
                <button id="btn-login">Ingresar solicitud</button>
                {
                    datos &&
                    <p>{datos.data}</p>
                }
            </div>
        </form>
    )
}