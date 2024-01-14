let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener('click',function(){
  // Show the Modal Container
  modalContainer.style.display="block";
});
// When the user clicks on <span> (x), close the modal container.

closeBtn.onclick = function() {
  modalContainer.style.display = "none";
  }

