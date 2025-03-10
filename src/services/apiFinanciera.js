export const obtenerDatosFinancieros = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ingresos: [5000, 7000, 6000, 8000, 9000],
          gastos: [3000, 4000, 3500, 4500, 5000],
        });
      }, 1000); 
    });
  };