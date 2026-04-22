import { useState } from "react";
import Button from "../UI/Button";

function UserForm({ onSaveUserData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = { name, email, website };

    onSaveUserData(nuevoUsuario);

    setName("");
    setEmail("");
    setWebsite("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-200 p-4 rounded text-black"
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Correo electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sitio web:</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <Button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
        name="Enviar"
      />
    </form>
  );
}

export default UserForm;
