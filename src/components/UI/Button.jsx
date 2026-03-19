function Button({ type = 'button', name, onClick, className = 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' }) {
	return (
		<button type={type} className={className} onClick={onClick}>
			{name}
		</button>
	)
}

export default Button