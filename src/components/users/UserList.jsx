import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { apiUserList } from "../../api/apiFetch";
import UserForm from "./UserFrom";

function ListaDeUsuarios() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  console.log("VITE_API_URL=", import.meta.env.VITE_API_URL);

  useEffect(() => {
    apiUserList()
      .then((data) => {
        if (data) {
          setUsers(data);
        } else {
          setError("No se pudieron cargar los usuarios");
        }
      })
      .catch(() => {
        setError("Error al cargar la lista de usuarios");
      });
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  } else if (users.length === 0) {
    return <p className="text-gray-500">Cargando usuarios...</p>;
  }

  return (
    <>
      <UserForm
        onSaveUserData={(newUser) =>
          setUsers((prevUsers) => [...prevUsers, newUser])
        }
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
        {users.map((user, index) => (
          <UserCard
            key={index}
            nombre={user.name}
            correo={user.email}
            web={user.website}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeUsuarios;
