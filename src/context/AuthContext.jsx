import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    // 1. Empezamos DESCONECTADOS (false) por defecto
    const [usuario, setUsuario] = useState({
        conectado: false, 
        nombre: "",
        rol: ""
    });

    // 2. Función específica para INICIAR sesión
    const iniciarSesion = () => {
        setUsuario({conectado: true, nombre: "Juan Perez", rol: "Administrador"});
    };

    // 3. Función específica para CERRAR sesión
    const cerrarSesion = () => {
        setUsuario({conectado: false, nombre: "", rol: ""});
    };

    return (
        // Pasamos las nuevas funciones al Provider
        <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};