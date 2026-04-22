function UserCard({nombre, correo, web}){
    return (
        <div className="bg-gray-200 border border-gray-300 p-4 rounded text-black">
            <h2 className="text-lg font-semibold">{`Nombre: ${nombre}`}</h2>
            <h2 className="text-sm text-gray-700">{`Correo: ${correo}`}</h2>
            <h2 className="text-sm text-gray-700">{`Web: ${web}`}</h2>
        </div>
    );
}

export default UserCard;
