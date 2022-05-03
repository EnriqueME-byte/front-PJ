import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import { useFormulario } from "../../hooks/useFormulario";
import "../../estilos/login.css";
import { types } from "../../tipos/types";

export const Login = () => {

    const [form, cambiarInput] = useFormulario({
        nombre: "",
        password: ""
    });

    const [url, setUrl] = useState('');

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const { datos } = useFetch(url, '1', form);

    console.log(datos);

    const { nombre, password } = form;

    const logear = (e) => {
        e.preventDefault();
        setUrl("http://127.0.0.1:8080/api/login");
        if (datos) {
            if (datos.data !== 'No se encontro el usuario') {
                const payload = datos.data.split('.')[1];
                const decodificado = atob(payload);
                console.log("payload: " + decodificado);
                const sesion = JSON.parse(decodificado);
                console.log(sesion.exp)
                const expi = new Date(sesion.exp * 1000);
                console.log(expi);
                console.log(expi.toUTCString());
                const action = {
                    type: types.login,
                    payload: { token: datos.data }
                }
                dispatch(action);
                navigate("/configuraciones", {
                    replace: true
                });
            } else {
                console.log("error");
            }
        }
    }

    return (
        <form onSubmit={logear}>
            <div className="container-login">
                <h3>Ingresar</h3>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={cambiarInput}
                />
                <input
                    type="text"
                    placeholder="Cotraseña"
                    name="password"
                    value={password}
                    onChange={cambiarInput}
                />
                <button id="btn-login">Ingresar</button>

            </div>
        </form>
    )

}