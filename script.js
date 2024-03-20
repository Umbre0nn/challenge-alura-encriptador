// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los elementos del DOM que necesitaremos
    const textBox = document.querySelector(".text-box");
    const encryptBtn = document.querySelector(".encrypt-btn");
    const decryptBtn = document.querySelector(".decrypt-btn");
    const resultText = document.querySelector(".result-text");
    const copyBtn = document.querySelector(".copy-btn");
    const imageContainer = document.querySelector(".image-container");
    const paragraphContainer = document.querySelector(".paragraph-container");

    // Agrega un evento de clic al botón de encriptación
    encryptBtn.addEventListener("click", function() {
        // Obtiene el texto del cuadro de texto y lo convierte a minúsculas
        const text = textBox.value.toLowerCase();
        // Encripta el texto y lo muestra en el elemento de resultado
        const encryptedText = encryptText(text);
        resultText.textContent = encryptedText;
        // Limpia el cuadro de texto y oculta la imagen y los párrafos
        clearTextBox();
        hideImageAndParagraphs();
    });

    // Agrega un evento de clic al botón de desencriptación
    decryptBtn.addEventListener("click", function() {
        // Obtiene el texto del cuadro de texto y lo convierte a minúsculas
        const text = textBox.value.toLowerCase();
        // Desencripta el texto y lo muestra en el elemento de resultado
        const decryptedText = decryptText(text);
        resultText.textContent = decryptedText;
        // Limpia el cuadro de texto y oculta la imagen y los párrafos
        clearTextBox();
        hideImageAndParagraphs();
    });

    // Agrega un evento de clic al botón de copiar
    copyBtn.addEventListener("click", function() {
        // Obtiene el texto del resultado y lo copia al portapapeles
        const textToCopy = resultText.textContent;
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert("Texto copiado correctamente"))
            .catch(err => console.error("Error al copiar texto: ", err));
    });

    // Función para encriptar el texto
    function encryptText(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para limpiar el cuadro de texto
    function clearTextBox() {
        textBox.value = "";
    }

    // Función para ocultar la imagen y los párrafos
    function hideImageAndParagraphs() {
        imageContainer.style.display = "none";
        paragraphContainer.style.display = "none";
    }
});
