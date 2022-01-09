//elements area
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondeElement = document.querySelector(".second");
const backgroundColorButton = document.querySelector(".background_button");
const numberColorButton = document.querySelector(".numbers_button");
const fontStyleButton = document.querySelector(".font_button");
const colorPiker = document.querySelector(".colorPiker");
const colorPikerDisplay = document.querySelector(".colorPikerhide");
const amPmElement = document.querySelector(".am_pm");
const body = document.body;
const section = document.querySelector("section");
//clock

setInterval(() => {
  const now = new Date();
  hourElement.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
  })
    .format(now)
    .slice(0, 2);
  minuteElement.textContent = now.getMinutes();
  secondeElement.textContent = now.getSeconds();
  amPmElement.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
  })
    .format(now)
    .slice(2)
    .toLowerCase();
}, 1000);
//clock

//colors array
const colorArr = [
  "#b194af",
  "#acbd3d",
  "#5c46a5",
  "#6dbb55",
  "#d464bb",
  "#59c879",
  "#962270",
  "#47ce97",
  "#d9578f",
  "#407b20",
  "#ac72d4",
  "#94af45",
  "#657ce1",
  "#c5a12d",
  "#412870",
  "#dbc767",
  "#8c4790",
  "#a0c36b",
  "#623766",
  "#da8829",
  "#6591d9",
  "#c16626",
  "#38d1db",
  "#cf483f",
  "#4dc7aa",
  "#c94057",
  "#4c9c68",
  "#d9764c",
  "#89a1d6",
  "#db9c4c",
  "#3b4c6b",
  "#d8a666",
  "#323c4a",
  "#a1a053",
  "#90aaa4",
  "#71402e",
  "#7ea78b",
  "#513f39",
  "#c6967e",
  "#39533c",
  "#bb918a",
  "#3e4220",
  "#9f7f88",
  "#a09c77",
  "#5e6777",
  "#9fa48f",
  "#74395d",
  "#8aae6c",
  "#922e4e",
  "#367230",
  "#c196de",
  "#867617",
  "#4a5791",
  "#b09e40",
  "#4dacd7",
  "#8c3f11",
  "#64adc7",
  "#852921",
  "#60b5b9",
  "#d55f76",
  "#489776",
  "#d089bb",
  "#62661a",
  "#b39fcb",
  "#595c26",
  "#ddacb9",
  "#3e6b3f",
  "#d18294",
  "#97c392",
  "#6a323c",
  "#79bfb1",
  "#cf746c",
  "#337670",
  "#d27c5f",
  "#2e4b45",
  "#c7ae7a",
  "#758eae",
  "#966c2e",
  "#000000",
  "#ffffff",
  "#92abb9",
  "#7e512b",
];
//colors array

// add image background ........
//background color----->>>

//create the html part of the colors
colorArr.forEach((color) => {
  const html = `<div class="${color}  color"style="background:${color};"></div>`;
  colorPiker.insertAdjacentHTML("afterbegin", html);
});
const colorChose = document.querySelectorAll(".color");
//display the colorspiker
backgroundColorButton.addEventListener("click", function () {
  colorPikerDisplay.style.display = "grid";
});
numberColorButton.addEventListener("click", function () {
  colorPikerDisplay.style.display = "grid";
});
//hide the color piker
colorChose.forEach((element) => {
  element.addEventListener("click", function () {
    colorPikerDisplay.style.display = "none";
    body.style.background = `${element.className.slice(0, 8)}`;
    section.style.background = `${element.className.slice(0, 8)}`;
  });
});
//background color----->>>
