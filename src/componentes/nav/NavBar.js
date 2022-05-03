import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import "../../estilos/dashboard.css";

export const NavBar = () => {

    
    const { sesion, dispatch } = useContext(AuthContext);
    const [usuario, setUsuario] = useState({
        id: "",
        nombre: ""
    });

    

    useEffect(() => {
        if (sesion.logeado) { //Para decodificar el payload del jwt
            const payload = sesion.token.split('.')[1];
            const parseado = JSON.parse(atob(payload));
            setUsuario({
                id: parseado.sub,
                nombre: parseado.usuario
            })
        }
    }, []);

    const { id, nombre } = usuario;
    
    return (
        <div className="menu-nav">
            <a><NavLink to="/configuraciones">Formulario Configuración</NavLink></a>
            <a><NavLink to="/solicitudes">Formulario Solicitud</NavLink></a>
            <a><NavLink to="/general">Ver Solicitudes</NavLink></a>
            <a>Bienvenido {nombre} </a>
        </div>
    )
}