import { useState } from 'react';

export default function BotonLike(){
    const [like, setLike] = useState(false);

    return(
        <div style={{ padding: '20px' }}>
            <h2>Prueba de interaccion</h2>
            {like && <p>¡Gracias por tu click!</p>}
            <button onClick={ ()=>setLike(!like) } style={{background: like ? '#10b981' : '#cbd5e1', padding: '10px'}} > {like ? 'Quitar Like': 'Dar Like'} </button>
        </div>
    );
}