// Simulación de una API de incidencias
export const reportarIncidencia = (incidencia) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Incidencia reportada', incidencia });
      }, 1000);
    });
  };