import React, { useState, useEffect } from 'react';

const Notificaciones = () => {
    const [notificaciones, setNotificaciones] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        setNotificaciones([
          { id: 1, mensaje: 'Corte de agua el 15 de marzo.' },
          { id: 2, mensaje: 'Mantenimiento programado para el 20 de marzo.' },
        ]);
      }, 1000);
    }, []);
  
    return (
      <div className="card">
        <h2>Notificaciones</h2>
        <ul>
          {notificaciones.map((notificacion) => (
            <li key={notificacion.id}>{notificacion.mensaje}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Notificaciones;