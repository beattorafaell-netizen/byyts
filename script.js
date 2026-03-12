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

