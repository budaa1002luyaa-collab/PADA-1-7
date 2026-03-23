let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function teneg() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "your luser";
  }
}
