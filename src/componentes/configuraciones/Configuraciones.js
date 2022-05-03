import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFormulario } from "../../hooks/useFormulario";


export const Configuraciones = () => {

    const [form,cambiarInput] = useFormulario({
        proporcion : "",
        diferencia : "",
        anio : "",
        activo : ""
    });

    const [url,setUrl] = useState('');

    const {datos} = useFetch(url,'1',form);
    
    const { proporcion,diferencia,anio,activo } = form;
    const ingresarConfig = (e) =>{
        e.preventDefault();
        setUrl('http://127.0.0.1:8080/api/cargar');
    }

    return(
        <form onSubmit={ingresarConfig}>
        <div className="container-login">
            <h3>Configuración de carga</h3>
            <input
                type="number"
                placeholder="Proporción"
                name="proporcion"
                value={proporcion}
                onChange={cambiarInput}
            />
            <input
                type="number"
                placeholder="Diferencia"
                name="diferencia"
                value={diferencia}
                onChange={cambiarInput}
            />
            <input
                type="number"
                placeholder="Año"
                name="anio"
                value={anio}
                onChange={cambiarInput}
            />
            <input
                type="number"
                placeholder="Activo ( 0 o 1)"
                name="activo"
                value={activo}
                onChange={cambiarInput}
            />
            <button id="btn-login">Cargar Configuración</button>
            {
                datos &&
                    <p>{datos.data}</p> 
            }
        </div>
    </form>
    )
}