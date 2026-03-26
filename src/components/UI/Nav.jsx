import { Link } from "react-router-dom"

function Nav(){
	return (
		<nav className="bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
				<h1 className="text-lg font-semibold">React Clase</h1>
				<ul className="flex gap-4 m-0 p-0 list-none">
					<li><Link className="hover:text-gray-300" to="/home">Inicio</Link></li>
					<li><Link className="hover:text-gray-300" to="/about">About</Link></li>
					<li><Link className="hover:text-gray-300" to="/contact">Contact</Link></li>
					<li><Link className="hover:text-gray-300" to="/login">Login</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav;
