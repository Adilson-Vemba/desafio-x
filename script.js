// script.js


const postInput = document.getElementById('postInput');
const charCount = document.getElementById('charCount');
const postButton = document.getElementById('postButton');
const timeline = document.getElementById('timeline');

// Atualiza o contador de caracteres em tempo real
postInput.addEventListener('input', () => {
  const remaining = 280 - postInput.value.length;
  charCount.textContent = remaining;

  if (remaining <= 50) {
    charCount.classList.add('warning');
  } else {
    charCount.classList.remove('warning');
  }

  postButton.disabled = postInput.value.trim().length === 0;
});

// Posta uma nova mensagem (manual)
postButton.addEventListener('click', () => {
  addPost(postInput.value.trim(), "Adilson Vemba");
  postInput.value = '';
  charCount.textContent = 280;
  postButton.disabled = true;
});

// Função para criar uma nova postagem
function addPost(content, user = "Usuário") {
  if (!content) return;

  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const now = new Date().toLocaleString();

  postElement.innerHTML = `
    <div class="user">${user}</div>
    <div class="date">${now}</div>
    <div class="content">${content}</div>
    <div class="interactions">
      <div class="interaction like">
        <img src="xm.webp" alt="" class="imagen"> <span class="like-count">0</span>
      </div>
    </div>
  `;

  timeline.prepend(postElement);

  // Adiciona interatividade aos botões
  const likeButton = postElement.querySelector('.like');
  const likeCount = likeButton.querySelector('.like-count');

  likeButton.addEventListener('click', () => {
    let currentCount = parseInt(likeCount.textContent);
    if (likeButton.classList.contains('liked')) {
      currentCount--;
      likeButton.classList.remove('liked');
    } else {
      currentCount++;
      likeButton.classList.add('liked');
    }
    likeCount.textContent = currentCount;
  });
}

// Simula atualizações em tempo real
const simulatedPosts = [
  "Nova funcionalidade lançada! 🎉",
  "Acompanhe as atualizações em tempo real 🔄",
  "Postagens automáticas adicionando dinamismo ao feed 🚀",
  "Como está o seu dia hoje? 😊",
  "Aproveite essa funcionalidade incrível com animações suaves ✨"
];

function simulateRealTimeUpdates() {
  setInterval(() => {
    // Escolhe uma postagem aleatória do array
    const randomPost = simulatedPosts[Math.floor(Math.random() * simulatedPosts.length)];
    addPost(randomPost, "NovaSotech");
  }, 7000); // Atualiza a cada 5 segundos
}

// Inicia o simulador de atualizações
simulateRealTimeUpdates();



document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");
  const menuToggle = document.createElement("button");

  menuToggle.classList.add("menu-toggle");
  menuToggle.textContent = "☰ Menu";
  document.body.appendChild(menuToggle);

  // Função para abrir e fechar o menu
  menuToggle.addEventListener("click", () => {
      aside.classList.toggle("active");
  });

  // Fecha o menu quando clicar fora dele
  document.addEventListener("click", (event) => {
      if (!aside.contains(event.target) && !menuToggle.contains(event.target)) {
          aside.classList.remove("active");
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");
  const menuToggle = document.createElement("button");

  menuToggle.classList.add("menu-toggle");
  menuToggle.textContent = "☰ Menu";
  document.body.appendChild(menuToggle);

  // Verifica se é mobile para esconder o menu
  function checkScreenSize() {
      if (window.innerWidth <= 768) {
          aside.classList.add("closed");
      } else {
          aside.classList.remove("closed");
      }
  }

  checkScreenSize(); // Executa ao carregar
  window.addEventListener("resize", checkScreenSize); // Atualiza ao redimensionar

  // Abre e fecha o menu no mobile
  menuToggle.addEventListener("click", () => {
      aside.classList.toggle("closed");
  });

  // Fecha o menu ao clicar fora
  document.addEventListener("click", (event) => {
      if (window.innerWidth <= 768 && !aside.contains(event.target) && !menuToggle.contains(event.target)) {
          aside.classList.add("closed");
      }
  });
});
