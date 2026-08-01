import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {iniciarSesion} = useContext(AuthContext);

    const navigate = useNavigate();

    const manejarLogin = (e)=>{
        e.preventDefault();

        if (email && password){
            iniciarSesion();
            navigate('/');
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh', background: '#f1f5f9' }}>
            <form onSubmit={manejarLogin} style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0, 0.1)', width: '350px' }}>

                <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '10px' }}>Iniciar Sesion</h2>

                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>Ingresa a tu panel de administracion</p>

                <input type="text"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />

                <input type="password" 
                    placeholder="Contrasena"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />

                <button type="submit" style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
                    Entrar al Sistema
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>No tienes cuenta? <Link to="/registro" style={{ color: '#3b82f6', textDecoration: 'none' }}>Registrate</Link></p>
            </form>
        </div>
    );

}