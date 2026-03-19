import React, { useState } from "react";
import Button from "./UI/Button";

function UserForm({ onSaveUserData }) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = { nombre, edad };

    onSaveUserData(nuevoUsuario);

    setNombre("");
    setEdad("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-4 rounded text-black">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <Button type="submit" className="bg-blue-500 text-white p-2 rounded" name="Enviar" />
    </form>
  );
}

export default UserForm;