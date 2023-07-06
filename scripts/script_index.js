alert('O Portfólio ainda esta em desenvolvimento.');

var tituloEl = document.querySelector("#titulo");
const texto_final = "Seja bem vindo ao meu Portfólio!";
var caracteres = [texto_final.length];

caracteres = texto_final.split("");

function show_text(tituloEl){
	const digitacao = setInterval(function define_intervalo(){
		if(caracteres.length){
			tituloEl.innerHTML += caracteres.shift();
		}
	}, 150);
	}

show_text(tituloEl);
