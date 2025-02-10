import React, { useState } from 'react';

const RegistroPagos = () => {
    const [pago, setPago] = useState({ descripcion: '', monto: '' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Pago registrado:', pago);
    };
  
    return (
      <div className="card">
        <h2>Registro de Pagos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Descripción"
            value={pago.descripcion}
            onChange={(e) => setPago({ ...pago, descripcion: e.target.value })}
          />
          <input
            type="number"
            placeholder="Monto"
            value={pago.monto}
            onChange={(e) => setPago({ ...pago, monto: e.target.value })}
          />
          <button type="submit">Registrar Pago</button>
        </form>
      </div>
    );
  };

export default RegistroPagos;