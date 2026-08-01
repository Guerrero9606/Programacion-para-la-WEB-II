import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();
    // Aquí iría el fetch POST a MongoDB para guardar el nuevo usuario
    alert(`Usuario ${nombre} creado con éxito. Ahora inicia sesión.`);
    navigate('/login'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f1f5f9' }}>
      <form onSubmit={manejarRegistro} style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '350px' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '30px' }}>Crear Cuenta</h2>

        <input type="text" 
            placeholder="Nombre completo" 
            value={nombre} 
            onChange={(e)=>setNombre(e.target.value)} 
            required 
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
        <input type="email" 
            placeholder="Correo Electrónico" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
        <input type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '6px', border: '1px solid #cbd5e1' }} />

        <button type="submit" style={{ width: '100%', padding: '12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
          Registrarse
        </button>
        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
          <Link to="/login" style={{ color: '#3b82f6', textDecoration: 'none' }}>Volver al Login</Link>
        </p>
      </form>
    </div>
  );
}