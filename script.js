let contador = 0;

const valor = document.querySelector("#valor");
const botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function (evento) {

        const estilos = evento.currentTarget.classList;

        if (estilos.contains("diminuir")) {
            contador--;
        } 
        else if (estilos.contains("aumentar")) {
            contador++;
        } 
        else if (estilos.contains("reiniciar")) {
            contador = 0;
        }

        valor.textContent = contador;
    });
});
