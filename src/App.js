import React, { useState } from 'react';
import './App.css';
import EstadoCuenta from './components/EstadoCuenta';
import RegistroPagos from './components/RegistroPagos';
import Notificaciones from './components/Notificaciones';
import BotonEmergencia from './components/BotonEmergencia';
import PagosOnline from './components/PagosOnline';
import ReportesFinancieros from './components/ReportesFinancieros';
import AvisosGenerales from './components/AvisosGenerales';
import ReportesIncidencias from './components/ReportesIncidencias';
import EncuestasVotaciones from './components/EncuestasVotaciones';

function App() {
  const [esAdmin, setEsAdmin] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [notificaciones, setNotificaciones] = useState([]);

  const handleLogin = () => {
    if (usuario === 'DirectivaUser' && contrasena === 'ResidencialAppPassword') {
      setEsAdmin(true);
      setMostrarLogin(false);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
    setUsuario('');
    setContrasena('');
  };

  const handleLogout = () => {
    setEsAdmin(false);
  };

  const handleCancelar = () => {
    setMostrarLogin(false);
    setUsuario('');
    setContrasena('');
    setError('');
  };

  const agregarNotificacion = (mensaje) => {
    const nuevaNotificacion = {
      id: notificaciones.length + 1,
      mensaje: mensaje,
    };
    setNotificaciones([...notificaciones, nuevaNotificacion]);
  };

  return (
    <div className="app-container">
      <h1>App de Residentes</h1>
      {!esAdmin ? (
        <button onClick={() => setMostrarLogin(true)} className="admin-btn">
          Iniciar sesión como Admin
        </button>
      ) : (
        <button onClick={handleLogout} className="admin-btn">
          Cerrar sesión de Admin
        </button>
      )}

      {mostrarLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Iniciar sesión como Admin</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="modal-buttons">
              <button onClick={handleLogin}>Ingresar</button>
              <button onClick={handleCancelar}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

<div className="grid-container">
        <EstadoCuenta />
        <RegistroPagos />
        <Notificaciones notificaciones={notificaciones} />
        <PagosOnline />
        <ReportesFinancieros />
        <ReportesIncidencias />
        {esAdmin && <AvisosGenerales agregarNotificacion={agregarNotificacion} />}
        <EncuestasVotaciones />
        <BotonEmergencia />
      </div>
    </div>
  );
}

export default App;