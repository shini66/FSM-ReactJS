import { useState } from "react";
import UserList from "@/components/UserList.jsx";

function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="text-center">
      <button onClick={() => setShowContent(!showContent)}>
        {" "}
        {showContent ? "Ocultar" : "Mostrar"} Mensaje
      </button>
      <div
        className={`transition-opacity transition-transform duration-300 ease-out ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!showContent}
      >
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a la Página de Inicio
        </h1>
        <p className="text-lg text-gray-700">
          Esta es la página principal de nuestro sitio web.
        </p>
        <UserList />
      </div>
    </div>
  );
}

export default HomePage;
