import React from "react";

function Example2() {
    const userList = [
        { id: 1, name: "Alice", age: 30, state: true, salario: 1000 },
        { id: 2, name: "Bob", age: 25, state: false, salario: 1000 },
        { id: 3, name: "Charlie", age: 35, state: true, salario: 1000 },
    ];

    const activeUsers = userList.filter(user => user.state);
    const totalSalario = activeUsers.reduce((total, user) => total + user.salario, 0);

    return (
        <div>
            <h2>Usuarios Activos</h2>
            <ul>
                {activeUsers.map(user => (
                    <li key={user.id}>{user.name} - {user.age} años - Salario: ${user.salario}</li>
                ))}
            </ul>
            <p>Total Salario de Usuarios Activos: ${totalSalario}</p>
        </div>
    );
}

export default Example2;