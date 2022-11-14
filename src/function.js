const password = "Cake10mil46@";

export function checkPassword() {
  document.getElementById("init").addEventListener("click", function () {
    const senha = document.getElementById("password").value;

    if (senha === password) {
      document.querySelector(".item1").style.display = "none";
    } else {
      alert("Senha incorreta");
    }
  });
}
