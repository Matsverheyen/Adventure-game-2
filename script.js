var hasKey = false;

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

function level1() {
  document.body.style.backgroundImage = "url('/img/level_1.jpg')";
  document.getElementById('btn1').setAttribute("onClick", "level2();");
  document.getElementById('btn2').setAttribute("onClick", "level3();");
  document.getElementById('btn3').setAttribute("onClick", "level4();");
  document.getElementById('btn4').setAttribute("onClick", "level5();");
  document.body.style.backgroundSize = "cover";
  document.getElementById('btn1').style.width = "10%";
  document.getElementById('btn1').style.top = "35%;";
  document.getElementById('btn1').style.height = "38%";
  document.getElementById('btn1').style.left = "35%";
  document.getElementById('btn2').style.width = "5%";
  document.getElementById('btn2').style.top = "35%";
  document.getElementById('btn2').style.height = "23%";
  document.getElementById('btn2').style.left = "55%";
  document.getElementById('btn3').style.width = "15%";
  document.getElementById('btn3').style.top = "25%";
  document.getElementById('btn3').style.height = "23%";
  document.getElementById('btn3').style.left = "68%";
  document.getElementById('btn4').style.width = "10%";
  document.getElementById('btn4').style.top = "30%";
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
    //bg
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
  document.getElementById('btn1').style.left = "30%";
  document.getElementById('btn2').style.width = "15%";
  document.getElementById('btn2').style.height = "10%";
  document.getElementById('btn2').style.top = "50%";
  document.getElementById('btn2').style.left = "35%";
  document.getElementById('btn3').style.width = "5%";
  document.getElementById('btn3').style.height = "25%";
  document.getElementById('btn3').style.top = "47%";
  document.getElementById('btn3').style.left = "60%";
  document.getElementById('btn4').style.top = "40%";
  document.getElementById('btn1').setAttribute("onClick", "level2();");
  document.getElementById('btn2').setAttribute("onClick", "level3();");
  document.getElementById('btn3').setAttribute("onClick", "level4();");
  document.getElementById('btn4').setAttribute("onClick", "level1();");
}