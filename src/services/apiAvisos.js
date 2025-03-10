// Simulación de una API de avisos
export const enviarAviso = (aviso) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Aviso enviado', aviso });
      }, 1000);
    });
  };
  
  export const obtenerAvisos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, mensaje: 'Corte de agua el 15 de marzo.' },
          { id: 2, mensaje: 'Mantenimiento programado para el 20 de marzo.' },
        ]);
      }, 1000);
    });
  };