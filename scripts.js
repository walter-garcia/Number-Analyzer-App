let numberValue = document.querySelector("input.form-control");
let button = document.querySelector("button.btn-primary");
let result = document.querySelector("ul.list-group");
let resTotal = document.querySelector("div.modal-body");
let list = [];

function isNumber(number) {
  if (number != "" && number != 0) {
    return true;
  } else {
    return false;
  }
}

function inList(number, list) {
  if (list.indexOf(Number(number)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(numberValue.value) && !inList(numberValue.value, list)) {
    list.push(Number(numberValue.value));
    let newElement = document.createElement("li");
    newElement.className = "list-group-item";
    let textNode = document.createTextNode(`Value ${numberValue.value} added`);
    newElement.appendChild(textNode);
    result.appendChild(newElement);
  } else {
    alert("Invalid value or already stored in list.");
  }
  numberValue.value = "";
  numberValue.focus();
}

function analyze() {
  if (list == "") {
    resTotal.innerHTML = "I need some data before analysis.";
  } else {
    let total = list.length;
    let biggerNumber = list[0];
    let smallerNumber = list[0];
    let sum = 0;
    let average = 0;

    for (let position in list) {
      sum += list[position];
      if (list[position] > biggerNumber) {
        biggerNumber = list[position];
      }
      if (list[position] < smallerNumber) {
        smallerNumber = list[position];
      }
    }
    average = sum / total;
    resTotal.innerHTML = "";
    resTotal.innerHTML += `Foram cadastrados ${total} números <br>`;
    resTotal.innerHTML += `O menor valor cadastrado foi ${smallerNumber} <br>`;
    resTotal.innerHTML += `O maior valor cadastrado foi ${biggerNumber} <br>`;
    resTotal.innerHTML += `A soma dos valores cadastrados é ${sum} <br>`;
    resTotal.innerHTML += `A média dos valores cadastrados é ${average} <br>`;
  }
  $("#analyzeModal").on("hidden.bs.modal", function() {
    $("input.form-control").focus();
  });
}

numberValue.addEventListener("keyup", event => {
  if (event.key == "Enter") {
    button.click();
  }
});
