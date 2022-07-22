let dos = document.querySelector("#dos");
let uno = document.getElementById("uno");
let tres = document.getElementById("tres");
let body = document.querySelector("body");
let circulo = document.querySelector("#circle");




const del = () => {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
};
uno.addEventListener("click", () => {
  body.classList.remove("active1");
  body.classList.remove("active2");
  circulo.style.left = "0";
});
dos.addEventListener("click", () => {
  body.classList.add("active1");
  body.classList.remove("active2");
  circulo.style.left = "36%";
});
tres.addEventListener("click", () => {
  body.classList.add("active2");
  body.classList.remove("active1");
  circulo.style.left = "65%";
});
