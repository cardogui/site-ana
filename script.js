function mostrar() {
  let carta = document.getElementById("conteudo");
  carta.classList.remove("hidden");

// Data que começaram
let inicio = new Date("2024-11-25");
let hoje = new Date();

// Diferença em milissegundos
let diferenca = hoje - inicio;

// Converter pra dias
let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

// Mostrar na tela
document.getElementById("tempo").innerHTML =
  "Estamos juntos há " + dias + " dias ❤️";


  setTimeout(() => {
    carta.classList.add("ativa");
  }, 100);

  document.getElementById("botao").style.display = "none";

  // Música
  let musica = document.getElementById("musica");
  musica.volume = 0;
  musica.play();

  let volume = 0;
  let fade = setInterval(() => {
    if (volume < 1) {
      volume += 0.02;
      musica.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 100);

  // Texto digitando (personalizado)
  let texto = "Minha Princesa, Eu não consigo encontrar palavras que expliquem o quanto eu amo você, Eu sempre vou estar aqui por você, Até nos momentos mais dificeis, Quero que saiba que sou muito feliz ao seu lado. Do Seu Roddy...";
  let i = 0;
  let elemento = document.getElementById("texto");

  function digitar() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 35);
    }
  }
  digitar();

  // Fotos
  let fotos = document.querySelectorAll(".fotos img");
  fotos.forEach((foto, index) => {
    setTimeout(() => {
      foto.classList.add("mostrar");
    }, index * 700);
  });

  // Corações
  setInterval(() => {
    let coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 5000);
  }, 400);
}

