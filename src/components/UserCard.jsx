function UserCard({nombre, edad}){
    return (
        <div className="bg-gray-200 border border-gray-300 p-4 rounded text-black">
            <h2 className="text-lg font-semibold">{`Nombre: ${nombre}`}</h2>
            <h2 className="text-sm text-gray-700">{`Edad: ${edad}`}</h2>
        </div>
    );
}

export default UserCard;
