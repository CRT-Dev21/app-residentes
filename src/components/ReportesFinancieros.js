import React, { useState } from 'react';

const ReportesIncidencias = () => {
  const [incidencia, setIncidencia] = useState({
    tipo: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidencia({ ...incidencia, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Incidencia reportada:', incidencia);
    alert('Incidencia reportada');
    setIncidencia({ tipo: '', descripcion: '' });
  };

  return (
    <div className="card form-card">
      <h2>Reportes de Incidencias</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="tipo"
            placeholder="Tipo de incidencia"
            value={incidencia.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="descripcion"
            placeholder="Descripción de la incidencia"
            value={incidencia.descripcion}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit">Reportar</button>
      </form>
    </div>
  );
};

export default ReportesIncidencias;