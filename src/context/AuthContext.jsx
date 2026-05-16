import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [usuario, setUsuario] = useState({
        conectado: true,
        nombre: "Juan Perez",
        rol: "Administrador"
    });

    const alternarSesion = ()=>{
        if (usuario.conectado) {
            setUsuario({conectado: false, nombre: "", rol: ""});
        } else {
            setUsuario({conectado: true, nombre: "Ana Gomez", rol: "Editor"});
        }
    };

    return (
        <AuthContext.Provider value={{ usuario, alternarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};