const icon = document.getElementById('icon');
const hamburger = document.getElementById('hamburger');
const bigger = document.getElementById('addSize');
const smaller = document.getElementById('subtractSize');

icon.onclick = function() {
  if (hamburger.classList[1] != 'active') {
    console.log('Hamburger');
    hamburger.classList.add('active');
  } else {
    hamburger.classList.remove('active');
  }
}

bigger.onclick = function() {
  console.log('Smaller');
  let mainHtmlElement = document.documentElement;
  let style = window.getComputedStyle(mainHtmlElement, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style);
  console.log(style);
  style = (fontSize+3) + "px";
  mainHtmlElement.style.fontSize = style;
}

smaller.onclick = function() {
  console.log('Smaller');
  let mainHtmlElement = document.documentElement;
  let style = window.getComputedStyle(mainHtmlElement, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style);
  console.log(style);
  style = (fontSize-3) + "px";
  mainHtmlElement.style.fontSize = style;
}
