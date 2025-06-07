const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const fireworks = document.getElementById('fireworks');

const messages = [
  "Opa", "Tem certeza disso?", "Acho melhor pensar direito",
  "Está muito precipitada", "Tente novamente mais tarde",
  "Vai mesmo ficar regulando?", "Dá logo esse negócio, mulher", "Não"
];
let msgIndex = 0;

// Inicial posicionamento do botão NÃO
noBtn.style.top = '80%';
noBtn.style.left = '45%';

function moveNoBtn() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.textContent = messages[msgIndex];

  msgIndex++;
  if (msgIndex >= messages.length) {
    msgIndex = 0;
    // Voltar pro lugar inicial
    noBtn.style.top = '80%';
    noBtn.style.left = '45%';
    noBtn.textContent = messages[msgIndex];
  }
}

// Rápido no celular (touch) e também no hover desktop
noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // evita clique e scroll
  moveNoBtn();
});

yesBtn.addEventListener('click', () => {
  popup.style.display = 'flex';

  // Cria fogos de artifício
  for (let i = 0; i < 100; i++) {
    const fw = document.createElement('div');
    fw.classList.add('firework');
    fw.style.left = Math.random() * 100 + '%';
    fw.style.top = Math.random() * 100 + '%';
    fw.style.setProperty('--x', (Math.random() - 0.5) * 600);
    fw.style.setProperty('--y', (Math.random() - 0.5) * 600);
    fireworks.appendChild(fw);
    setTimeout(() => fw.remove(), 1000);
  }
});
