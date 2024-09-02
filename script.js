const getScreen = document.getElementById("screen");

function changeText(num) {
  if (getScreen.innerHTML === "Start Calculate...") {
    clearScreen();
  }
  getScreen.innerHTML += num;
}
function clearScreen() {
  getScreen.innerHTML = "";
}

function sqrt() {
  let num = getScreen.innerHTML;
  let numStr = Math.sqrt(num).toPrecision(10); // Limits the number to 10 significant digits
  getScreen.innerHTML = parseFloat(numStr);
}
function square(x) {
  let num = getScreen.innerHTML;
  let numStr = (num*num).toPrecision(10); // Limits the number to 10 significant digits
  getScreen.innerHTML = parseFloat(numStr);
}

function operation() {
  let op = getScreen.innerHTML;
  let ops = ["+", "-", "\u00D7", "\u00F7"];
  let founded = ops.find((char) => op.includes(char));
  let x = +op.substring(0, op.indexOf(founded));
  let y = +op.substring(op.indexOf(founded) + 1, op.length);
  switch (founded) {
    case "+":
      getScreen.innerHTML = x + y;
      break;
    case "-":
      getScreen.innerHTML = x - y;
      break;
    case "\u00D7":
      getScreen.innerHTML = x * y;
      break;
    case "\u00F7":
      getScreen.innerHTML = x / y;
      break;
    default:
      let button = document.getElementById("equals");
      button.classList.add("fade-out");
      setTimeout(() => {
        button.classList.remove("fade-out");
      }, 300);
  }
}
