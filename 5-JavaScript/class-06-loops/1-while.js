// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

let count = 1; //flag
while (count <= 10) {
  if (count > 2 && count < 8) {
    count++;
    continue;
    // break;
  }

  console.log(count);
  count++; // container
}

count = 0;
let aux = 1;
while (aux <= 200) {
  console.log(aux);
  aux = count * 2;
  count++;
}

let resp;
while (true) {
  resp = prompt("Deseja encerrar?");

  if (resp) {
    alert("Obrigado pela sua visita!");
    break;
  }
}

do {
  resp = prompt("Deseja sair?");
} while (resp);
