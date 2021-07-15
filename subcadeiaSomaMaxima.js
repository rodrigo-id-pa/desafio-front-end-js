let array = [2, -4, 6, 8, -10, 100, -6, 5];
let maiorSoma = 0;
let posInicio = 0;
let posFim = 0;

function calculaSomaMaxima() {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      let soma = 0;

      for (let k = i; k <= j; k++) {
        soma += array[k];
      }

      if (soma > maiorSoma) {
        posInicio = i;
        posFim = j;
        maiorSoma = soma;
      }
    }
  }

  console.log(
    `Posição de início e fim: [ ${posInicio}, ${posFim} ] Soma: ${maiorSoma}`,
  );
}
