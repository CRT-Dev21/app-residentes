import React, { useState } from 'react';

const RegistroPagos = () => {
  const [pago, setPago] = useState({ descripcion: '', monto: '' });
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pago.descripcion || !pago.monto) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
    console.log('Pago registrado:', pago);
    setMensaje('Pago registrado exitosamente.');
    setPago({ descripcion: '', monto: '' });
  };

  return (
    <div className="card">
      <h2>Registro de Pagos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Descripción"
            value={pago.descripcion}
            onChange={(e) => setPago({ ...pago, descripcion: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Monto"
            value={pago.monto}
            onChange={(e) => setPago({ ...pago, monto: e.target.value })}
            required
          />
        </div>
        <button type="submit">Registrar Pago</button>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
};

export default RegistroPagos;