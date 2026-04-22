import UserList from "@/components/users/UserList.jsx";

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenido a la Página de Inicio
      </h1>
      <p className="text-lg text-gray-700">
        Esta es la página principal de nuestro sitio web.
      </p>
      <UserList />
    </div>
  );
}

export default HomePage;
