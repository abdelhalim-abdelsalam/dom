
const element = document.createElement("div");
element.id = "testqq";
element.innerHTML += "Extra stuff";
const el = document.getElementById("testqq"); // el will be null!

const bottomTwo = document.querySelector(".btn-2");
function btn() {
  alert("You clicked the button!");
}
bottomTwo.addEventListener("click", btn);

const newBackGroundColor = document.querySelector(".box-3");
function changeColor() {
  newBackGroundColor.style.backgroundColor = "blue";
}
newBackGroundColor.addEventListener("mouseover", changeColor);
