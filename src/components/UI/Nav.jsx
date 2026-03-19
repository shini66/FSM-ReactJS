function Nav(){
	return (
		<nav className="bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
				<h1 className="text-lg font-semibold">React Clase</h1>
				<ul className="flex gap-4 m-0 p-0 list-none">
					<li><a className="hover:text-gray-300" href="#">Inicio</a></li>
					<li><a className="hover:text-gray-300" href="#">Usuarios</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
