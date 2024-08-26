let criptografado =""
function processo(char) {
    switch (char) {
        case 'e':
            criptografado += "enter";
            break;
        case 'i':
            criptografado += "imes";
            break;
        case 'a':
            criptografado += "ai";
            break;
        case 'o':
            criptografado += "ober";
            break;
        case 'u':
            criptografado += "ufat";
            break;
        default:
            criptografado += char;
    }
    document.getElementById("resultado").style.display="none";
}


function criptografarTudo() {
    criptografado = "";  // Reiniciar o texto criptografado
    const valores = document.getElementById("textoArea").value;

    for (let i = 0; i < valores.length; i++) {
       let letra = valores[i];
        processo(letra);
    }
}


function criptografar() {
    criptografarTudo();
    document.getElementById("resultadoP").innerHTML = criptografado;
    document.getElementById("informacao").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}


function descriptografar() {
    let valor = document.getElementById("textoArea").value;
    valor = valor.replaceAll("enter", "e")
                 .replaceAll("imes", "i")
                 .replaceAll("ai", "a")
                 .replaceAll("ober", "o")
                 .replaceAll("ufat", "u");

    document.getElementById("resultadoP").innerHTML = valor;
    document.getElementById("informacao").style.display = "none";
    document.getElementById("resultado").style.display = "block";
}

function copiar() {
    const texto = document.getElementById("resultadoP").innerHTML;

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
}