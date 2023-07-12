const lista = [];
const area = prompt("Qual área seguir Front-End ou Back-End?");


while (area == "Front-End") {
  const tecnologia = prompt("Quer aprender React ou Vue?");
  if (tecnologia == "React" || tecnologia == "Vue") {
    const resposta = prompt(
      "Digite 1: para seguir se especializando na área escolhida ou Digite 2: para seguir se desenvolvendo para se tornar Fullstack"
    );
    if (resposta == 1) {
      alert(`Você escolheu seguir se especializando na área de ${area}`);
      while (resposta == 1) {
        const especializacao = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender? para sair aperte ok"
        );
        lista.push(especializacao);
        if (especializacao == "") {
          alert(`Linguagens que gostaria de aprender: ${lista.join(", ")}`);
          resposta = 0;
        }
      }
      break;
    } else if (resposta == 2) {
      alert(
        `Você escolheu continuar se desenvolvendo para se tornar Fullstack`
      );
      while (resposta == 2) {
        const especializacao = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender? para sair aperte ok"
        );
        lista.push(especializacao);
        if (especializacao == "") {
          alert(`Linguagens que gostaria de aprender: ${lista.join(", ")}}`);
          resposta = 0;
        }
      }
      break;
    } else {
      alert("Você escolheu uma opção inválida!");
      break;
    }
  }
}

while (area == "Back-End") {
  const tecnologia = prompt("Quer aprender C# ou Java?");
  if (tecnologia == "C#" || tecnologia == "Java") {
    const resposta = prompt(
      "Digite 1: para seguir se especializando na área escolhida ou Digite 2: para seguir se desenvolvendo para se tornar Fullstack"
    );
    if (resposta == 1) {
      alert(`Você escolheu seguir se especializando na área de ${area}`);
      while (resposta == 1) {
        const especializacao = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender? para sair aperte ok"
        );
        lista.push(especializacao);
        if (especializacao == "") {
          alert(`Linguagens que gostaria de aprender: ${lista.join(", ")}}`);
          resposta = 0;
        }
      }
      break;
    } else if (resposta == 2) {
      alert(
        `Você escolheu continuar se desenvolvendo para se tornar Fullstack`
      );
      while (resposta == 2) {
        const especializacao = prompt(
          "Tem mais alguma tecnologia que você gostaria de aprender? Para sair aperte ok"
        );
        lista.push(especializacao);
        if (especializacao == "") {
          alert(`Linguagens que gostaria de aprender: ${lista.join(", ")}}`);
          resposta = 0;
        }
      }
      break;
    } else {
      alert("Você escolheu uma opção inválida!");
      break;
    }
  }
}
