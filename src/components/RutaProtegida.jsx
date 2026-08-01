import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RutaProtegida(){

    const { usuario } = useContext(AuthContext);

    if(!usuario.conectado) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;

}