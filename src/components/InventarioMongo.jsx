import { useState, useEffect } from 'react';

export default function InventarioMongo(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://simplified-dist-aware-optimum.trycloudflare.com/api/productos"

    const obtenerProductos = async () => {
        try {
            const respuesta = await fetch(API_URL);

            if (!respuesta.ok){
                throw new Error("Fallo al conectar...");
            }

            const datosMongo = await respuesta.json();
            setProductos(datosMongo);
        } catch (error) {
            setError(error.message);
        } finally {
            setCargando(false);
        }
    }

    useEffect(()=>{
        obtenerProductos();
    }, []);

    if (cargando) return <h3>Consultando datos a la API</h3>;
    if (error) return <h3 style={{color: 'red'}}>{error}</h3>;
    
    return (
        <div style={{background: '#f8fafc', padding: '20px', borderRadius: '8px'}}>
            <h2 style={{color: 'black'}}>Inventario desde Mongo</h2>
            <ul style={{listStyle: 'none', padding: '0'}}>
                {productos.map((prod)=>(
                    <li key={prod._id || prod.id } style={{
                        padding: '15px',
                        borderBottom: '1px solid #cbd5e1',
                        background: 'white',
                        marginBottom: '10px',
                        borderRadius: '5px'
                    }}>
                        <strong>{prod.nombre}</strong>
                        <p style={{ 
                            margin: '5px 0 0 0',
                            color: '#10b981',
                            fontWeight: 'bold'
                         }}>
                            Precio: ${prod.precio}
                         </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}