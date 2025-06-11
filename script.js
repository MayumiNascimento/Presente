// script.js

const images = document.querySelectorAll(".carousel img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal");

const imageTexts = [
  "Nosso primeiro passeio juntos!",
  "Conhecendo sua filhinha amada",
  "Uma lembrança carinhosa (risos)",
  "Sua formatura da odiosa Fatec",
  "Nossa primeira viagem a Curitiba",
  "Primeiro dia dos Namorados",
  "Primeiro dia dos Namorados (que foi pro Intagram)",
  "Almoço chique",
  "Segundo passeio em Curitiba",
  "Nossos looks lindos no seu aniversário",
  "Seu aniversário na Churrascaria top",
  "Foto no parque bonito em Curitiba",
  "Memorável Eat Asia e minha altura em maçãs",
  "Nossas muitas manhãs de eu você e Charlie",
  "A fracassada video entrevista para a FCamara",
  "Nosso jeitinho de apoiar você sempre",
  "Aniversário da nossa velhinha mais linda",
  "Das muitas idas ao Bruneco suplementos",
  "Mais looks bonito para o nosso dia dos Namorados",
  "Nossa primeira vez na R3",
  "Passeio na praia",
  "Meu dia de princesa com você",
  "Almoço em família",
  "Dia de compras para nossa casa",
  "Filme em família",
  "O dia do Papai noel da coca cola",
  "Decoração de shopping daora",
  "Natal na casa da Rafa",
  "Natal em família",
  "Passeio na praia em família",
  "Dias de luta pós-cirurgia",
  "Seu olho gordo no festival de churrasco",
  "Pós-concursos (de inumeros concursos)",
  "Passeio em SP",
  "Passeio em SP 2",
  "Lanchinhos no HouseBeer",
  "Mais um passeio",
  "Bonitos e passeadeiros",
  "Nós quando dominarmos o mundo",
  "Passeio com amigos",
  "Registro de passeio com amigos (sem os amigos)",
  "Mais um churrasquinho a custa da Rafa",
  "Passeio com amigos (agora os meus)",
  "O dia que escolhemos nossa casinha",
  "Nosso futuro (com muito mais lembranças)",
];

images.forEach((img) => {
  img.addEventListener("click", () => {
    const index = img.getAttribute("data-index");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalText.textContent = imageTexts[index] || "Um momento especial juntos";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Estilo responsivo em carrossel horizontal (aplicar no HTML e CSS)
document.querySelector(".carousel").style.flexWrap = "nowrap";
document.querySelector(".carousel").style.overflowX = "auto";
document.querySelector(".carousel").style.scrollSnapType = "x mandatory";

images.forEach((img) => {
  img.style.scrollSnapAlign = "center";
});