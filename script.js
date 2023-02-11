const text_area = document.querySelector(".text-area-left");
const input_message = document.querySelector(".message");

const btn_encriptar = document.querySelector(".encriptar");
const btn_desencriptar = document.querySelector(".desencriptar");
const btn_copiar = document.querySelector(".copiar");





document.getElementById("buttons").addEventListener("click", function() {
    if (document.getElementById("text-area-left").value.trim() === "") {
        alert("Por favor escriba algo antes de enviar");
    } else {
    }
});


function encriptar (){
	var mensaje= text_area.value;
	var mensajeOculto = mensaje
	.replaceAll("e", "enter")
	.replaceAll("i", "imes")
	.replaceAll("a", "ai")
	.replaceAll("o", "ober")
	.replaceAll("u", "ufat");

	input_message.value = mensajeOculto;
}

function desencriptar (){
	var mensajeOculto = text_area.value;
	var mensaje = mensajeOculto
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");

	input_message.value = mensaje;
}

function copiar (){
	var mensajeOculto = input_message.value;
	navigator.clipboard.writeText(mensajeOculto);
}



btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copiar.onclick = copiar;



document.getElementById("encriptar").addEventListener("click", function(){
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "block";
});


const lettersRegex = /^[a-z\s-ñ]*$/;
const textarea = document.getElementById("text-area-left");
text_rea.oninput = function() {
  if (!lettersRegex.test(textarea.value)) {
    textarea.value = text_area.value.replace(/[^a-z\s]/g, "");
    alert("solo letras minúsculas y sin acento");
  }
};

