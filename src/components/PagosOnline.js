import React, { useState } from 'react';
import { procesarPago } from '../services/apiPagos';

const PagosOnline = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
    monto: '',
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!fechaRegex.test(formData.fechaExpiracion)) {
      nuevosErrores.fechaExpiracion = 'Formato inválido (MM/AA)';
    }

    const cvvRegex = /^\d{3,4}$/;
    if (!cvvRegex.test(formData.cvv)) {
      nuevosErrores.cvv = 'CVV inválido (3 o 4 dígitos)';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      try {
        const respuesta = await procesarPago(formData);
        console.log('Respuesta de la API:', respuesta);
        alert(respuesta.message);
      } catch (error) {
        console.error('Error en el pago:', error);
        alert(error.message);
      }
    } else {
      alert('Por favor, corrige los errores en el formulario.');
    }
  };

  return (
    <div className="card form-card">
      <h2>Pagos Online</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre en la tarjeta"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="numeroTarjeta"
            placeholder="Número de tarjeta"
            value={formData.numeroTarjeta}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="fechaExpiracion"
            placeholder="MM/AA"
            value={formData.fechaExpiracion}
            onChange={handleChange}
            required
          />
          {errores.fechaExpiracion && (
            <p className="error">{errores.fechaExpiracion}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
          {errores.cvv && <p className="error">{errores.cvv}</p>}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="monto"
            placeholder="Monto a pagar"
            value={formData.monto}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default PagosOnline;