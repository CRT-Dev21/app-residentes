import './App.css';
import EstadoCuenta from './components/EstadoCuenta';
import RegistroPagos from './components/RegistroPagos';
import Notificaciones from './components/Notificaciones';
import BotonEmergencia from './components/BotonEmergencia';

function App() {
  return (
    <div className="app-container">
      <h1>App de Residentes</h1>
      <div className="grid-container">
        <EstadoCuenta />
        <RegistroPagos />
        <Notificaciones />
        <BotonEmergencia />
      </div>
    </div>
  );
}

export default App;