// Simulación de una API para votaciones
let votaciones = [
    {
      id: 1,
      pregunta: '¿Deberíamos renovar el área común?',
      opciones: ['Sí', 'No'],
      resultados: { Sí: 10, No: 5 },
    },
    {
      id: 2,
      pregunta: '¿Qué día prefieren para la reunión mensual?',
      opciones: ['Lunes', 'Miércoles', 'Viernes'],
      resultados: { Lunes: 3, Miércoles: 7, Viernes: 2 },
    },
  ];
  
  export const obtenerVotaciones = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(votaciones);
      }, 1000);
    });
  };
  
  export const votar = (idVotacion, opcion) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const votacion = votaciones.find((v) => v.id === idVotacion);
        if (votacion) {
          votacion.resultados[opcion] = (votacion.resultados[opcion] || 0) + 1;
          resolve({ success: true, resultados: votacion.resultados });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };