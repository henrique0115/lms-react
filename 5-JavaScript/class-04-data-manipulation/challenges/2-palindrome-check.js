// Crie uma função para verificar palíndromos
// A lógica deve receber string com palavra ou texto
// Use um ternário para imprimir "Verdadeiro" ou "Falso" na tela

function isPalindrome(text) {
  const normalText = text.toLowerCase().replaceAll(" ", "");
  const reverseText = text.toLowerCase().replaceAll(" ", "").split("").reverse().join("");

  return normalText === reverseText;
}

const text = "Ame o Poema";
const result = isPalindrome(text);

console.log(result ? "Verdadeiro" : "Falso");
