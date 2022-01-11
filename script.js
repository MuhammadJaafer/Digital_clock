const section = document.querySelector("section");
//emplement clock function
const clockdisplay = function (_class = "clock", font = " ", id = "") {
  const html = `
  <div class="${_class}" id="${font}" style="font-family:${font};">
  <div class="hour">00</div>
  <div class="dote">:</div>
  <div class="minute">00</div>
  <div class="dote">:</div>
  <div class="second">00</div>
  <div class="am_pm">am</div>
</div>
`;
  return html;
};
section.insertAdjacentHTML("afterbegin", clockdisplay("clock"));
//emplement clock function
//elements area

const backgroundColorButton = document.querySelector(".background_button");
const numberColorButton = document.querySelector(".numbers_button");
const fontStyleButton = document.querySelector(".font_button");
const colorPiker = document.querySelector(".colorPiker");
const colorPikerDisplay = document.querySelector(".colorPikerhide");

const body = document.body;
const nav = document.querySelector("nav");
const fontPiker = document.querySelector(".fontPiker");
let currentBackground = "#000000";
let currentFontColor = "#ffffff";
let active;
//clock
//fonts array
const fontArr = [
  "'Abel' ,sans-serif",
  "'Alfa Slab One', cursive",
  "'Anonymous Pro', monospace",
  "'Antic', sans-serif",
  "'Be Vietnam Pro' ,sans-serif",
  "'Cabin Sketch', cursive",
  "'Cairo', sans-serif",
  "'Cinzel Decorative', cursive",
  "'Great Vibes', cursive",
  "'IM Fell English SC', serif",
  "'Leckerli One', cursive",
  "'Licorice', cursive",
  "'Luxurious Roman', cursive",
  "'Monoton', cursive",
  "'Norican', cursive",
  "'Oswald', sans-serif",
  "'Permanent Marker', cursive",
  "'Rancho', cursive",
  "'Shadows Into Light', cursive",
  "'Shizuru', cursive",
  "'Staatliches', cursive",
  "'The Nautigal', cursive",
  "'Ubuntu Mono', monospace",
  "'Vujahday Script', cursive",
  "'Yesteryear', cursive",
];
//fonts array
//font family changing
fontArr.forEach((font) => {
  fontPiker.insertAdjacentHTML(
    "afterbegin",
    clockdisplay("mineClock", font, font)
  );
});
fontStyleButton.addEventListener("click", function () {
  fontPiker.style.display = "grid";
});
const fontChose = document.querySelectorAll(".mineClock");
fontChose.forEach((element) => {
  element.addEventListener("click", function () {
    fontPiker.style.display = "none";
    document.querySelector(".clock").style.fontFamily = `${element.id}`;
  });
});
//font family changing
const hourElement = document.querySelectorAll(".hour");
const minuteElement = document.querySelectorAll(".minute");
const secondeElement = document.querySelectorAll(".second");
const amPmElement = document.querySelectorAll(".am_pm");
setInterval(() => {
  const now = new Date();
  hourElement.forEach((element) => {
    element.textContent = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
    })
      .format(now)
      .slice(0, 2);
  });
  minuteElement.forEach((element) => (element.textContent = now.getMinutes()));
  secondeElement.forEach((element) => (element.textContent = now.getSeconds()));
  amPmElement.forEach(
    (element) =>
      (element.textContent = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
      })
        .format(now)
        .slice(2)
        .toLowerCase())
  );
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
  active = "background";
});
numberColorButton.addEventListener("click", function () {
  colorPikerDisplay.style.display = "grid";
  active = "number";
});
//hide the color piker and change the color

colorChose.forEach((element) => {
  element.addEventListener("click", function () {
    colorPikerDisplay.style.display = "none";
    if (active === "background") {
      body.style.background = `${element.className.slice(0, 7)}`;
      section.style.background = `${element.className.slice(0, 7)}`;
      backgroundColorButton.style.background = `${element.className.slice(
        0,
        7
      )}`;
      currentBackground = `${element.className.slice(0, 7)}`;
      if (currentBackground === "#ffffff") {
        backgroundColorButton.style.borderColor = "#000000";
        numberColorButton.style.borderColor = "#000000";
      } else {
        backgroundColorButton.style.borderColor = "#ffffff";
        numberColorButton.style.borderColor = "#ffffff";
      }
    } else if (active === "number") {
      body.style.color = `${element.className.slice(0, 7)}`;
      section.style.color = `${element.className.slice(0, 7)}`;
      fontStyleButton.style.color = `${element.className.slice(0, 7)}`;
      numberColorButton.style.background = `${element.className.slice(0, 7)}`;
      currentFontColor = `${element.className.slice(0, 7)}`;
    }
  });
});
//background color----->>>
