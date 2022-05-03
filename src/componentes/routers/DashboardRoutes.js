import { Route,Routes } from "react-router-dom"
import { Configuraciones } from "../configuraciones/Configuraciones"
import { Informacion } from "../informacion/Informacion"
import { NavBar } from "../nav/NavBar"
import { Solicitudes } from "../solicitudes/Solicitudes"

export const DashboardRoutes = () => {

    return(
        <>
            <NavBar />
            <Routes>
                <Route path ="/configuraciones" element = {<Configuraciones />}/>
                <Route path ="/solicitudes" element = {<Solicitudes />}/>
                <Route path = "/general" element = {<Informacion />} />
            </Routes>
        </>
    )
}