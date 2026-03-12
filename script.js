// ── Matrix rain ──────────────────────────────────────────────
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops   = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  columns = Math.floor(canvas.width / fontSize);
  while (drops.length < columns) drops.push(Math.random() * -100);

  ctx.font = fontSize + 'px Share Tech Mono, monospace';

  for (let i = 0; i < columns; i++) {
    const char = Math.random() > 0.5 ? '1' : '0';
    const brightness = Math.random();

    if (brightness > 0.95) {
      ctx.fillStyle = '#ffffff';
    } else if (brightness > 0.7) {
      ctx.fillStyle = '#00ff41';
    } else {
      ctx.fillStyle = '#005c18';
    }

    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 45);

// ── Generators ───────────────────────────────────────────────
function chamar_binarios() {
  let container = document.querySelector(".chamar-binarios");
  container.classList.add("classe_container");
  container.innerHTML = "";

  let inputTamanho = document.createElement("input");
  inputTamanho.type = "number";
  inputTamanho.min = "1";
  inputTamanho.value = "8";

  let numeros_binarios = document.createElement("p");
  numeros_binarios.textContent = "";

  let botaoGerar = document.createElement("button");
  botaoGerar.textContent = "Gerar Binário";

  botaoGerar.addEventListener("click", () => {
    let tamanho = parseInt(inputTamanho.value);
    numeros_binarios.textContent = gerarBinarioAleatorio(tamanho);
  });

  container.appendChild(numeros_binarios);
  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
}

function gerarBinarioAleatorio(tamanho) {
  let resultado = "";
  for (let i = 0; i < tamanho; i++) {
    resultado += Math.floor(Math.random() * 2);
  }
  return resultado;
}

function chamar_octais() {
  let container = document.querySelector(".chamar-octais");
  container.classList.add("classe_container");
  container.innerHTML = "";

  let inputTamanho = document.createElement("input");
  inputTamanho.type = "number";
  inputTamanho.min = "1";
  inputTamanho.value = "8";

  let numeros_octais = document.createElement("p");
  numeros_octais.textContent = "";

  let botaoGerar = document.createElement("button");
  botaoGerar.textContent = "Gerar Octal";

  botaoGerar.addEventListener("click", () => {
    let tamanho = parseInt(inputTamanho.value);
    numeros_octais.textContent = gerarOctalAleatorio(tamanho);
  });

  container.appendChild(numeros_octais);
  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
}

function gerarOctalAleatorio(tamanho) {
  let resultado = "";
  for (let i = 0; i < tamanho; i++) {
    resultado += Math.floor(Math.random() * 8);
  }
  return resultado;
}

function chamar_hexadecimais() {
  let container = document.querySelector(".chamar-hexadecimais");
  container.classList.add("classe_container");
  container.innerHTML = "";

  let inputTamanho = document.createElement("input");
  inputTamanho.type = "number";
  inputTamanho.min = "1";
  inputTamanho.value = "8";

  let numeros_hexadecimais = document.createElement("p");
  numeros_hexadecimais.textContent = "";

  let botaoGerar = document.createElement("button");
  botaoGerar.textContent = "Gerar Hexadecimal";

  botaoGerar.addEventListener("click", () => {
    let tamanho = parseInt(inputTamanho.value);
    numeros_hexadecimais.textContent = gerarHexadecimalAleatorio(tamanho);
  });

  container.appendChild(numeros_hexadecimais);
  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
}

function gerarHexadecimalAleatorio(tamanho) {
  let resultado = "";
  let caracteresHexadecimais = "0123456789ABCDEF";
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteresHexadecimais[Math.floor(Math.random() * 16)];
  }
  return resultado;
}
