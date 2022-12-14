import "./style/style.css";

const password = "123";
let yes = 0;
let not = 0;
let nule = 0;
let electore = 0;

document.getElementById("init").addEventListener("click", function () {
  const senha = document.getElementById("password").value;

  if (senha === password) {
    document.querySelector(".item1").style.display = "none";
    document.querySelector(".item2").style.display = "flex";
  } else {
    alert("Senha incorreta");
  }
});

function confirm() {
  const audio = new Audio("../audio/confirma-urna.mp3");
  audio.play();
  const confirm = document.getElementById("confirm");
  confirm.value = "voto computado";
  confirm.style.backgroundColor = "green";
  confirm.style.color = "#fff";

  document.querySelector(".vote").style.display = "none";

  setTimeout(function () {
    confirm.value = "Vote";
    confirm.style.backgroundColor = "#fff";
    confirm.style.color = "#000";
    document.querySelector(".vote").style.display = "flex";
  }, 4000);
}

document.getElementById("yes").addEventListener("click", function () {
  yes = yes + 1;
  electore = electore + 1;
  confirm();
});

document.getElementById("not").addEventListener("click", function () {
  not = not + 1;
  electore = electore + 1;
  confirm();
});

document.getElementById("nule").addEventListener("click", function () {
  nule = nule + 1;
  electore = electore + 1;
  confirm();
});

document.querySelector(".finish").addEventListener("click", function () {
  document.querySelector(".item2").style.display = "none";
  document.querySelector(".item3").style.display = "flex";
});

document.querySelector(".theEnd").addEventListener("click", function () {
  const senha = document.getElementById("senha").value;

  if (senha === password) {
    document.querySelector(".item3").style.display = "none";
    document.querySelector(".item4").style.display = "flex";
    const perYes = (yes * 100) / electore;
    const perNot = (not * 100) / electore;
    const perNule = (nule * 100) / electore;

    const result = document.getElementById("result");
    result.value = `Total de votantes: ${electore}
    
    Sim: ${perYes.toFixed(2)}%
    N??o: ${perNot.toFixed(2)}%
    Nulo: ${perNule.toFixed(2)}%
    
    Votos:
    SIM: ${yes} 
    N??O: ${not} 
    NULO: ${nule}`;
  } else {
    alert("Senha incorreta!");
    document.querySelector(".item2").style.display = "flex";
    document.querySelector(".item3").style.display = "none";
    document.getElementById("senha").value = "";
  }
});
