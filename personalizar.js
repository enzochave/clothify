const colorInput = document.getElementById("color");
const textInput = document.getElementById("text");
const positionSelect = document.getElementById("position");
const imgSize = document.getElementById("imgSize");
const imageUpload = document.getElementById("imageUpload");

const shirtColor = document.getElementById("shirtColor");
const previewText = document.getElementById("previewText");
const previewImage = document.getElementById("previewImage");
const printArea = document.getElementById("printArea");

colorInput.addEventListener("input", () => {
    shirtColor.setAttribute("fill", colorInput.value);
});

textInput.addEventListener("input", () => {
    previewText.innerText = textInput.value;
});

positionSelect.addEventListener("change", () => {
    printArea.className = "print-area";
    printArea.classList.add(positionSelect.value);
});

imgSize.addEventListener("input", () => {
    previewImage.style.width = imgSize.value + "px";
});

imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(e){
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
    }

    reader.readAsDataURL(file);
});
