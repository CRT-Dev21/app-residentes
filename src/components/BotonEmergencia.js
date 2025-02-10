import React from 'react';

  const BotonEmergencia = () => {
    const handleEmergencia = () => {
      alert('¡Alerta enviada a la mesa directiva y autoridades!');
    };
  
    return (
      <div className="card emergencia">
        <h2>Botón de Emergencia</h2>
        <button onClick={handleEmergencia}>Emergencia</button>
      </div>
    );
  };
  
export default BotonEmergencia;