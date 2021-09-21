var arr = [];
    var secret = Math.round(Math.random() * 10);

    document.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
        event.preventDefault();
        play();
      }
    });

    function showHistory() {
      //   var last = document.getElementById("his");
      //   his.innerText = "Your last text was:" + arr[arr.length - 1];
      var e = "<hr/>";

      for (var y = arr.length - 1; y >= 0; y--) {
        e += "Last Number Entered = " + arr[y] + "<br/>";
      }
      document.getElementById("rec").innerHTML = e;
    }

    function play() {
      //   var num = document.getElementById("num").value;
      var number = document.getElementById("number").value;
      var ans = document.getElementById("ans");
      if (number < secret) {
        ans.innerText = "You gussed too low";
      } else if (number > secret) {
        ans.innerText = "You gussed to high";
      } else {
        ans.innerText = "Aweasome";
        secret = Math.round(Math.random() * 10);
      }
      arr.push(number);
      showHistory();
    }