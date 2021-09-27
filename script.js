const arr = [];
var secret = Math.round(Math.random() * 10) + 1;

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    play();
  }
  //bug
  /*else {
    document.getElementById("number").value = event.key;
  }
  */
});
document.getElementById("restart").addEventListener("click", reset);
function reset() {
  document.getElementById("number").value = "";
  document.getElementById("rec").innerHTML = "";
  secret = Math.round(Math.random() * 10) + 1;
  var ans = document.getElementById("ans");
  ans.style.visibility = "hidden";
  ans.style.position = "absolute";
  arr.length = 0;
}

// document.getElementById("number").addEventListener("click", function (event) {
//   event.preventDefault();
// });

function showHistory() {
  var data = "";

  for (var y = arr.length - 1; y >= 0; y--) {
    data += '<p class="guess">You guessed ' + arr[y] + "<p>";
  }
  document.getElementById("rec").innerHTML = data;
}

function addToArray(num) {
  if (arr.length < 3) {
    arr.push(num);
  } else {
    arr.shift();
    arr.push(num);
  }
}

function play() {
  //   var num = document.getElementById("num").value;
  var number = document.getElementById("number").value;
  if (!Number(number)) {
    reset();
    return;
  }
  var ans = document.getElementById("ans");
  ans.style.visibility = "visible";
  ans.style.position = "relative";

  if (Number(number)) {
    addToArray(number);
  }
  ans.classList.remove("alert-warning");

  ans.classList.remove("alert-success");
  ans.classList.remove("alert-danger");
  if (number < secret) {
    ans.innerText = "You gussed too low";
    ans.classList.add("alert-danger");
  } else if (number > secret) {
    ans.innerText = "You gussed to high";
    ans.classList.add("alert-warning");
  } else {
    ans.innerText = "Aweasome";
    ans.classList.add("alert-success");
  }

  showHistory();
  document.getElementById("number").value = "";
}
