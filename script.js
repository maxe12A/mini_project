let moon = document.getElementById("moon");

window.addEventListener('scroll', () => {
  let value = window.scrollY; // get the current scroll position
  moon.style.top = value * 0.9 + "px"; // set the moon's top position
  text.style.top = 80 + value * -0.2 + "%"; // set the text's top position
});

let train = document.getElementById("train");

window.addEventListener('scroll', () => {
  let value = window.scrollY; // get the current scroll position
  train.style.left = value * 1.5 + "px"; // set the train's left position

});

let desert_moon =  document.querySelector(".desert_moon");
window.addEventListener('scroll', () => {
  let value = window.scrollY; // get the current scroll position
 desert_moon.style.top = value *1.5 +"px";
});

let man = document.getElementById("man");

window.addEventListener('scroll', () => {
  let value = window.scrollY; // get the current scroll position
  man.style.left = value * .6 + "px"; // set the train's left position

});

