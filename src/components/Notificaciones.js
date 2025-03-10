import React from 'react';

const Notificaciones = ({ notificaciones }) => {
  return (
    <div className="card">
      <h2>Notificaciones</h2>
      <ul>
        {notificaciones && notificaciones.length > 0 ? (
          notificaciones.map((notificacion) => (
            <li key={notificacion.id}>
              <span role="img" aria-label="notificación">🔔</span> {notificacion.mensaje}
            </li>
          ))
        ) : (
          <p>No hay notificaciones.</p>
        )}
      </ul>
    </div>
  );
};

export default Notificaciones;