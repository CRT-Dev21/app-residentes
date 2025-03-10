import React, { useState, useEffect } from 'react';
import { obtenerVotaciones, votar } from '../services/apiVotaciones';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const EncuestasVotaciones = () => {
  const [votaciones, setVotaciones] = useState([]);
  const [votacionSeleccionada, setVotacionSeleccionada] = useState(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [resultados, setResultados] = useState({});
  const [yaVoto, setYaVoto] = useState(false); 

  useEffect(() => {
    obtenerVotaciones().then((data) => setVotaciones(data));
  }, []);

  useEffect(() => {
    if (votacionSeleccionada) {
      const votacionesVotadas = JSON.parse(localStorage.getItem('votacionesVotadas')) || [];
      setYaVoto(votacionesVotadas.includes(votacionSeleccionada.id));
    }
  }, [votacionSeleccionada]);

  const handleVotar = async () => {
    if (!opcionSeleccionada) {
      alert('Por favor, selecciona una opción.');
      return;
    }
    const respuesta = await votar(votacionSeleccionada.id, opcionSeleccionada);
    if (respuesta.success) {
      setResultados(respuesta.resultados);

      const votacionesVotadas = JSON.parse(localStorage.getItem('votacionesVotadas')) || [];
      if (!votacionesVotadas.includes(votacionSeleccionada.id)) {
        votacionesVotadas.push(votacionSeleccionada.id);
        localStorage.setItem('votacionesVotadas', JSON.stringify(votacionesVotadas));
      }

      setYaVoto(true);
      alert('¡Voto registrado!');
    } else {
      alert('Error al votar. Inténtalo de nuevo.');
    }
  };

  const handleParticipar = (votacion) => {
    setVotacionSeleccionada(votacion);
    setResultados(votacion.resultados); 
    setOpcionSeleccionada(''); 
  };

  const data = {
    labels: Object.keys(resultados),
    datasets: [
      {
        label: 'Votos',
        data: Object.values(resultados),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card">
      <h2>Encuestas y Votaciones</h2>

      {/* Lista de votaciones */}
      <div className="votaciones-lista">
        <h3>Votaciones disponibles</h3>
        <ul>
          {votaciones.map((votacion) => (
            <li key={votacion.id}>
              <strong>{votacion.pregunta}</strong>
              <button
                onClick={() => handleParticipar(votacion)}
                className="participar-btn"
              >
                Participar
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulario para votar y resultados */}
      {votacionSeleccionada && (
        <div className="votacion-detalle">
          <h3>Votar: {votacionSeleccionada.pregunta}</h3>

          {/* Formulario para votar */}
          <div className="votacion-formulario">
            <select
              value={opcionSeleccionada}
              onChange={(e) => setOpcionSeleccionada(e.target.value)}
              disabled={yaVoto}
            >
              <option value="">Selecciona una opción</option>
              {votacionSeleccionada.opciones.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            <button onClick={handleVotar} disabled={yaVoto}>
              {yaVoto ? 'Ya votaste' : 'Votar'}
            </button>
          </div>

          {/* Resultados de la votación */}
          <div className="votacion-resultados">
            <h3>Resultados actuales</h3>
            <Bar data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EncuestasVotaciones;