const in_text_area = document.querySelector(".texto-input");
const in_mensaje = document.querySelector(".mensaje");
const btn_encriptar = document.querySelector(".b-enc");
const btn_desencriptar = document.querySelector(".b-desenc");
const btn_copiar = document.querySelector(".copiar");


document.getElementById("botons").addEventListener("click", function() {
    if (document.getElementById("texto-input").value.trim() === "") {
        alert("Por favor escriba algo antes de enviar");
    } else {
    }
});


function encriptar (){
	var mensaje = in_text_area.value;
	var hidden_message = mensaje
	.replaceAll("e", "enter")
	.replaceAll("i", "imes")
	.replaceAll("a", "ai")
	.replaceAll("o", "ober")
	.replaceAll("u", "ufat");

	in_mensaje.value = hidden_message;
}

function desencriptar (){
	var hidden_message = in_text_area.value;
	var mensaje = hidden_message
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");

	in_mensaje.value = mensaje;
}

function copiar (){
	var hidden_message = in_mensaje.value;
	navigator.clipboard.writeText(hidden_message);
}



btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copiar.onclick = copiar;



document.getElementById("b-enc").addEventListener("click", function(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "block";
});


const allabc = /^[a-z\s-ñ]*$/;
const text_area = document.getElementById("texto-input");
text_area.oninput = function() {
  if (!allabc.test(text_area.value)) {
    text_area.value = text_area.value.replace(/[^a-z\s]/g, "");
    alert("Ingrese solo letras minúsculas y sin acento");
  }
};


