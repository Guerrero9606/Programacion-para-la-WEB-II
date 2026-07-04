import clienteAxios from "../api/clienteAxios";
import { useState, useEffect } from 'react';

export default function InventarioAxios(){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const obtenerProductos = async ()=>{
        try {
            const respuesta = await clienteAxios.get('/productos');
            setProductos(respuesta.data);
        } catch (error) {
            console.error("Error al cargar:", error.response?.data?.messaje || error.messaje);
        } finally {
            setCargando(false);
        }
    };

    useEffect(()=>{
        obtenerProductos();
    }, []);

    const agregarProducto = async () => {
        const nuevo = { nombre: "Camara", precio: 80000};

        try {
            const respuesta = await clienteAxios.post('/productos', nuevo);
            setProductos([...productos, respuesta.data]);
            alert("Producto agregado con Axios");
        } catch (error) {
            console.error("Error al guardar:", error);
        }
    };

    const eliminarProducto = async (idMongo) => {
        try {
            await clienteAxios.delete(`/productos/${idMongo}`);
            setProductos(productos.filter(prod => prod._id !== idMongo));
            alert("Eliminado con exito");
        } catch (error) {
            console.error("Error al borrar:",error);
            alert("No se pudo eliminar");
        }
    };

    if (cargando) return <h3>Cargando con Axios...</h3>;

    return (
        <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '8px' }}>
            <h2>Inventario con Axios</h2>
            <button onClick={agregarProducto}
                style={{ background: '#3b82f8', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 15px', 
                    borderRadius: '5px', 
                    marginBottom: '15px', 
                    cursor: 'pointer' }}
            >Agregar camara</button>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {productos.map((prod) => (
                <li key={prod._id} style={{ padding: '10px',
                    background: 'white',
                    marginBottom: '5px',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'space-between'
                 }}>
                    <span><strong>{prod.nombre}</strong> - ${prod.precio}</span>
                    <button onClick={() => eliminarProducto(prod._id)}
                    style={{ background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                     }}
                    >Borrar</button>
                </li>
                ))}
            </ul>
        </div>
    );
}