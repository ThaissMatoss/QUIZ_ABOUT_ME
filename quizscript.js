function verResultado() {
    let pontos = 0;

    let livro = document.querySelector('input[name="livro"]:checked');
    let filme = document.querySelector('input[name="filme"]:checked');
    let cor = document.querySelector('input[name="cor"]:checked');
    let estacao = document.querySelector('input[name="estacao"]:checked');
    let musica = document.querySelector('input[name="musica"]:checked');

    if (livro && livro.value === "b") pontos++;
    if (filme && filme.value === "a") pontos++;
    if (cor && cor.value === "c") pontos++;
    if (estacao && estacao.value === "a") pontos++;
    if (musica && musica.value === "a") pontos++;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Você fez " + pontos + " de 5 pontos";

}