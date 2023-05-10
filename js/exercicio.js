const inputUser = document.querySelector("#idUser");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("styler","outline-color: #ff0000;")
})

const button = document.getElementById("changeColorButton");
button.addEventListener("click", function() {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "#ff0"; 

});

const input = document.getElementById("textInput");
const button = document.getElementById("addButton");
const list = document.getElementById("list");

button.addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  list.appendChild(newItem);
  input.value = "";
});

const button = document.getElementById("changeImageButton");
const image = document.getElementById("image");

button.addEventListener("click", function() {
  if (image.src.endsWith("lobo1.jpg")) {
    image.src = "lobo1.jpg";
  } else {
    image.src = "lobo2.jpg";
  }
});

const button = document.getElementById("hideElementButton");
const elementToHide = document.getElementById("elementToHide");

button.addEventListener("click", function() {
  elementToHide.style.display = "none";
});


