
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
const initialPosition = { top: '80%', left: '45%' };

noBtn.style.top = initialPosition.top;
noBtn.style.left = initialPosition.left;

function moveNoBtn() {
  if (msgIndex === 0) {
    noBtn.style.transition = "top 0.2s, left 0.2s";
  }

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.textContent = messages[msgIndex];

  msgIndex++;
  if (msgIndex >= messages.length) {
    msgIndex = 0;
    noBtn.style.top = initialPosition.top;
    noBtn.style.left = initialPosition.left;
    noBtn.textContent = messages[msgIndex];
  }
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn); // suporte mobile

yesBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
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
