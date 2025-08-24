
// Animación para abrir el sobre y mostrar la carta, y para cerrar la carta y mostrar el sobre
document.addEventListener('DOMContentLoaded', function() {
	const sobre = document.getElementById('sobre');
	const carta = document.getElementById('carta');
	if (sobre && carta) {
		sobre.addEventListener('click', function() {
			sobre.classList.add('abierto');
		});
		carta.addEventListener('click', function() {
			carta.classList.add('cerrando');
			setTimeout(() => {
				sobre.classList.remove('abierto');
				carta.classList.remove('cerrando');
			}, 500);
		});
	}
});
