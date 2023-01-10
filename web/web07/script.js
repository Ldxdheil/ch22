console.log("Mensaje desde el script externo");

function changeColor() {
  let item = document.getElementById("demo");
  item.style.color = "purple";
}

function changeColorH2(element, color) {
  console.log(element);
  console.log(color);
  /* document.getElementById("color-h2").style.color = color; */
  element.style.color = color;
}

function changeColorByClass(color) {
  const collection = document.getElementsByClassName("example");
  for (let i = 0; i < collection.length; i++) {
    let item = collection[i];
    item.style.color = color;
  }
}
