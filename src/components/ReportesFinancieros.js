import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { obtenerDatosFinancieros } from '../services/apiFinanciera';

const ReportesFinancieros = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatosFinancieros().then((data) => {
      const formattedData = data.ingresos.map((ingreso, index) => ({
        mes: `Mes ${index + 1}`,
        ingresos: ingreso,
        gastos: data.gastos[index],
      }));
      setDatos(formattedData);
    });
  }, []);

  return (
    <div className="card">
      <h2>Reportes Financieros</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ingresos" fill="#8884d8" name="Ingresos" />
            <Bar dataKey="gastos" fill="#82ca9d" name="Gastos" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportesFinancieros;