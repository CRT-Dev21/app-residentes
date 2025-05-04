import React from 'react';

const BotonEmergencia = () => {
  const handleEmergencia = () => {
    alert('¡Alerta de emergencia enviada!');
  };

  return (
    <div className="card emergencia">
      <h2>Botón de Emergencia</h2>
      <p>En caso de emergencia, presiona el botón para alertar a las autoridades.</p>
      <button onClick={handleEmergencia} className="emergencia-btn">
        Emergencia
      </button>
    </div>
  );
};

export default BotonEmergencia;