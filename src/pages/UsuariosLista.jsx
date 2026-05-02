import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

function UsuariosLista() {

    const baseDeUsuarios = [
        {id:1, nombre:"Juan Perez", rol: "Administrador", estado:"Activo", img:"https://randomuser.me/api/portraits/men/32.jpg"},
        {id:2, nombre:"Ana Gomez", rol: "Diseñadora", estado:"Inactivo", img:"https://randomuser.me/api/portraits/women/44.jpg"},
        {id:3, nombre:"Andres Lopez", rol: "Desarrollador", estado:"Activo", img:"https://randomuser.me/api/portraits/men/65.jpg"}
    ]

    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {baseDeUsuarios.map( (usuario)=>(
                    <UsuarioCard 
                    key={usuario.id}
                    nombre={usuario.nombre}
                    rol = {usuario.rol}
                    estado = {usuario.estado}
                    imagen={ usuario.img} />
                 ) )
                }
            </div>

        </div>
    );
}

export default UsuariosLista;