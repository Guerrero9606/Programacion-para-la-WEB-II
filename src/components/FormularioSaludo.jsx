import { useState } from "react";

export default function FormularioSaludo(){
    const [nombre, setNombre] = useState('');
    const [saludo, setSaludo] = useState('');

    const manejarEnvio = (e)=>{
        e.preventDefault();
        setSaludo(`¡Hola, ${nombre}! Bienvenido a React`);
    };

    return(
        <form onSubmit={manejarEnvio}>
            <label htmlFor="input-nombre">Ingresa tu nombre:</label>
            <input type="text" 
                placeholder="Ej: Ana" 
                id="input-nombre" 
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            <button type="submit">Saludar</button>
            {saludo && <h3>{saludo}</h3>}
        </form>
    );
}