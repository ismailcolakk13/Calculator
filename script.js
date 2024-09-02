const getScreen = document.getElementById("screen");

function changeText(num) {
  if (getScreen.innerHTML === "Hesaplamaya başla...") {
    clearScreen();
  }
  getScreen.innerHTML += num;
}
function clearScreen() {
  getScreen.innerHTML = "";
}

function sqrt() {
  let num = getScreen.innerHTML;
  getScreen.innerHTML = Math.sqrt(num);
}
function square(x) {
  let num = getScreen.innerHTML;
  getScreen.innerHTML = num * num;
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
