var hasKey = false;
var hasTorch = false;
var Code = Math.floor(1000 + Math.random() * 9000);

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

function fakkel() {
  hasTorch = true;
  document.getElementById("torch").style.display = "block";
  document.getElementById("btn2").style.display = "none";
}

function init() {
  document.getElementById('startBtn').setAttribute("onClick", "level1();");
  document.getElementById("startBtn").style.display = "block";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";
  document.body.style.backgroundColor = "#42474f";
  document.getElementById("startBtn").style.left = "40%";
  document.getElementById("startBtn").style.opacity = "10";
  document.getElementById("startBtn").innerHTML = "start";
  document.getElementById("startBtn").style.top = "50%";
  document.getElementById("startBtn").style.height = "10%";
  document.getElementById("startBtn").style.width = "20%";
  document.getElementById("btn4").style.display = "none";
}

function level1() {
  document.body.style.backgroundImage = "url('/img/level_1.jpg')";
  document.getElementById('btn1').setAttribute("onClick", "level2();");
  document.getElementById('btn3').setAttribute("onClick", "level4();");
  document.getElementById('btn4').setAttribute("onClick", "level9();");
  document.getElementById('startBtn').style.display = "none";
  document.body.style.backgroundSize = "cover";
  document.getElementById('btn1').style.width = "10%";
  document.getElementById('btn1').style.top = "30%";
  document.getElementById('btn1').style.height = "38%";
  document.getElementById('btn1').style.display = "block";
  document.getElementById("btn1").innerHTML = "";
  document.getElementById('btn1').style.left = "35%";
  document.getElementById('btn2').style.display = "none";
  document.getElementById('btn3').style.width = "15%";
  document.getElementById('btn3').style.top = "25%";
  document.getElementById('btn3').style.display = "block";
  document.getElementById('btn3').style.height = "23%";
  document.getElementById('btn3').style.left = "68%";
  document.getElementById('btn4').style.width = "10%";
  document.getElementById('btn4').style.top = "30%";
  document.getElementById('btn4').style.display = "block";
  document.getElementById('btn4').style.height = "50%";
  document.getElementById('btn4').style.left = "90%";
  console.log('Level 1');
}

function level2() {
  console.log('Level 2');
  if (!hasKey) {
    document.getElementById('msg').innerHTML = "Je hebt geen sleutel";
    delay(function () {
      document.getElementById('msg').innerHTML = "";
    }, 1500);
    console.log('Je hebt geen sleutel')
  } else {
    document.getElementById('msg').innerHTML = "In de cel lag een briefje met een code erop";
    delay(function () {
      document.getElementById('msg').innerHTML = Code;
      delay(function () {
        document.getElementById('msg').innerHTML = "";
      }, 1500);
    }, 1500);
  }
}

function level3() {
  console.log('Level 3');
  if (!hasKey) {
    document.getElementById('msg').innerHTML = "Je hebt geen sleutel";
    delay(function () {
      document.getElementById('msg').innerHTML = "";
    }, 1500);
    console.log('Je hebt geen sleutel')
  } else {
    //bg
  }
}

function level4() {
  document.body.style.backgroundImage = "url('/img/level_2.png')";
  document.body.style.backgroundSize = "cover";
  console.log('Level 4');
  document.getElementById('btn1').style.width = "5%";
  document.getElementById('btn1').style.height = "30%";
  document.getElementById('btn1').style.display = "block";
  document.getElementById('btn1').style.left = "30%";
  document.getElementById('btn1').style.top = "30%";
  document.getElementById('btn2').style.width = "15%";
  document.getElementById('btn2').style.height = "10%";
  if (!hasKey) {
    document.getElementById('btn2').style.display = "block";
  } else {
    document.getElementById('btn2').style.display = "none";
  }
  document.getElementById('btn2').style.top = "50%";
  document.getElementById('btn2').style.left = "35%";
  document.getElementById('btn3').style.width = "5%";
  document.getElementById('btn3').style.height = "25%";
  document.getElementById('btn3').style.display = "block";
  document.getElementById('btn3').style.top = "47%";
  document.getElementById('btn3').style.left = "60%";
  document.getElementById('btn4').style.top = "40%";
  document.getElementById('btn4').style.left = "90%";
  document.getElementById('btn4').style.width = "20%";
  document.getElementById('btn4').style.height = "70%";
  document.getElementById('btn4').style.display = "block";
  document.getElementById('btn1').setAttribute("onClick", "level5();");
  document.getElementById('btn2').setAttribute("onClick", "level6();");
  document.getElementById('btn3').setAttribute("onClick", "level7();");
  document.getElementById('btn4').setAttribute("onClick", "level1();");
}

function level5() {
  console.log('Level 5');
  document.body.style.backgroundImage = "url('/img/level_6.png')";
  document.body.style.backgroundSize = "cover";
  document.getElementById('btn1').style.display = "none";
  if (!hasTorch) {
    document.getElementById('btn2').style.display = "block";
  } else {
    document.getElementById('btn2').style.display = "none";
  }
  document.getElementById("btn2").style.left = "28%";
  document.getElementById("btn2").style.top = "55%";
  document.getElementById("btn2").style.width = "5%";
  document.getElementById("btn2").style.height = "20%";
  document.getElementById('btn2').setAttribute("onClick", "fakkel();");
  document.getElementById('btn3').setAttribute("onClick", "level8();");
  document.getElementById('btn4').setAttribute("onClick", "level4();");
  document.getElementById("btn4").style.left = "35%";
  document.getElementById("btn4").style.height = "20%";
  document.getElementById("btn4").style.width = "30%";
  document.getElementById("btn4").style.top = "80%";
  document.getElementById("btn3").style.left = "48%";
  document.getElementById("btn3").style.height = "30%";
  document.getElementById("btn3").style.width = "10%";
  document.getElementById("btn3").style.top = "60%";
}

function level6() {
  console.log('Level 6 - Sleutel');
  document.getElementById("key").style.display = "block";
  document.getElementById("btn2").style.display = "none";
  hasKey = true;
}

function level8() {
  console.log('Level 8')
}