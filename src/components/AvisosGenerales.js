import React, { useState } from 'react';

const AvisosGenerales = ({ agregarNotificacion }) => {
  const [aviso, setAviso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aviso.trim()) {
      agregarNotificacion(aviso); 
      setAviso('');
    }
  };

  return (
    <div className="card">
      <h2>Avisos Generales</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={aviso}
          onChange={(e) => setAviso(e.target.value)}
          placeholder="Escribe un aviso..."
          rows="6" 
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AvisosGenerales;