import React, { useState, useEffect } from 'react';

const EstadoCuenta = () => {
  const [pagos, setPagos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPagos([
        { id: 1, descripcion: 'Cuota Enero', estado: 'Pagado' },
        { id: 2, descripcion: 'Cuota Febrero', estado: 'Pendiente' },
      ]);
      setCargando(false);
    }, 1000);
  }, []);

  return (
    <div className="card">
      <h2>Estado de Cuenta</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {pagos.map((pago) => (
            <li key={pago.id} className={pago.estado === 'Pagado' ? 'pagado' : 'pendiente'}>
              {pago.descripcion}: <strong>{pago.estado}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EstadoCuenta;