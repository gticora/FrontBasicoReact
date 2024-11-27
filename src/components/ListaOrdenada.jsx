import React from 'react';
import PropTypes from 'prop-types'; // Validación de props para asegurar integridad.

const ListaOrdenada = ({ personas }) => {
  // Ordenar el arreglo por edad
  const personasOrdenadas = [...personas].sort((a, b) => a.edad - b.edad);

  return (
    <div className="mt-4">
      <h2 className="text-primary text-center">Lista de Personas Ordenada por Edad</h2>
      <ul className="list-group">
        {personasOrdenadas.map((persona, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{persona.nombre}</span>
            <span className="badge bg-secondary">{persona.edad} años</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Definir los tipos esperados de las props para evitar errores.
ListaOrdenada.propTypes = {
    personas: PropTypes.arrayOf(
      PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default ListaOrdenada;
