import React, {useState} from 'react';
import UserCard from '@/components/UserCard.jsx'
import UserForm from './UserFrom';

function ListaDeUsuarios() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <UserForm onSaveUserData={(newUser) => setUsers((prevUsers) => [...prevUsers, newUser])} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
        {users.map((user, index) => (
          <UserCard key={index} nombre={user.nombre} edad={user.edad} />
        ))}
      </div>
    </>
  )
}

export default ListaDeUsuarios;