//elements area
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondeElement = document.querySelector(".second");
const backgroundColorButton = document.querySelector(".background_button");
const numberColorButton = document.querySelector(".numbers_button");
const fontStyleButton = document.querySelector(".font_button");
const colorPiker = document.querySelector(".colorPiker");
const colorPikerDisplay = document.querySelector(".colorPikerhide");
const colorChose = document.querySelectorAll(".color");
//clock
setInterval(() => {
  const now = new Date();
  hourElement.textContent = now.getHours();
  minuteElement.textContent = now.getMinutes();
  secondeElement.textContent = now.getSeconds();
}, 1000);
//clock

//background color
backgroundColorButton.addEventListener("click", function () {
  colorPikerDisplay.style.display = "grid";
});
numberColorButton.addEventListener("click", function () {
  colorPikerDisplay.style.display = "grid";
});
colorChose.forEach((element) => {
  element.addEventListener("click", function () {
    colorPikerDisplay.style.display = "none";
  });
});
//background color
