function chamar_binarios() {
  let container = document.querySelector(".chamar-binarios");

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


  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
  container.appendChild(numeros_binarios);
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


  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
  container.appendChild(numeros_octais);
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
  }
  );
  container.appendChild(inputTamanho);
  container.appendChild(botaoGerar);
  container.appendChild(numeros_hexadecimais);
}

function gerarHexadecimalAleatorio(tamanho) {
  let resultado = "";
  let caracteresHexadecimais = "0123456789ABCDEF";
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteresHexadecimais[Math.floor(Math.random() * 16)];
  }
  return resultado;
}