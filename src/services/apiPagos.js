export const procesarPago = (datosPago) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (datosPago.numeroTarjeta && datosPago.monto > 0) {
          resolve({ success: true, message: 'Pago exitoso', datos: datosPago });
        } else {
          reject({ success: false, message: 'Error en el pago' });
        }
        
      }, 1200); 
    });
  };