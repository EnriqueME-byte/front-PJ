import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "../login/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path = "/login" element = {
                    <PublicRoutes>
                        <Login />
                    </PublicRoutes>
                }
                />
                <Route path = "/*" element ={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}