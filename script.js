var hasKey = false;
var hasTorch = false;
var CorrectCode = false;
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
  $("#torch").css("display", "block");
  $("#btn2").css("display", "none");
}

function init() {
  $("#startBtn").attr("onClick", "level1();");
  $("#btn4").css("display", "none");
  $("#btn1").css("display", "none");
  $("#btn2").css("display", "none");
  $("#btn3").css("display", "none");
  document.body.style.backgroundColor = "#42474f";
  $("#startBtn").css("display", "block");
  $("#startBtn").css("left", "40%");
  $("#startBtn").css("top", "50%");
  $("#startBtn").css("width", "20%");
  $("#startBtn").css("height", "10%");
  $("#startBtn").css("opacity", "10");
  $("#startBtn").text("start");
}

function level1() {
  document.body.style.backgroundImage = "url('/img/level_1.jpg')";
  $("#btn1").attr("onClick", "level2();");
  $("#btn3").attr("onClick", "level4();");
  $("#btn4").attr("onClick", "level9();");
  $("#startBtn").css("display", "none");
  $("#startBtn").css("display", "none");
  document.body.style.backgroundSize = "cover";
  $("#btn1").css("left", "35%");
  $("#btn1").css("top", "30%");
  $("#btn1").css("width", "10%");
  $("#btn1").css("height", "38%");
  $("#btn1").css("display", "block");
  $("#btn2").css("display", "none");
  $("#btn4").css("left", "90%");
  $("#btn4").css("top", "30%");
  $("#btn4").css("width", "10%");
  $("#btn4").css("height", "50%");
  $("#btn4").css("display", "block");
  $("#btn3").css("left", "68%");
  $("#btn3").css("top", "25%");
  $("#btn3").css("width", "15%");
  $("#btn3").css("height", "23%");
  $("#btn3").css("display", "block");
  console.log('Level 1');
}

function level2() {
  console.log('Level 2');
  if (!hasKey) {
    $("#msg").text("Je hebt geen sleutel");
    delay(function () {
      $("#msg").text("");
    }, 1500);
    console.log('Je hebt geen sleutel')
  } else {
    $("#msg").text("In de cel lag een briefje met een code erop");
    delay(function () {
      $("#msg").text(Code);
      delay(function () {
        $("#msg").text("");
      }, 1500);
    }, 1500);
  }
}

function level3() {
  console.log('Level 3');
  if (!hasKey) {
    $("#msg").text("Je hebt geen sleutel");
    delay(function () {
      $("#msg").text("");
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
  $("#btn1").css("left", "30%");
  $("#btn1").css("top", "30%");
  $("#btn1").css("width", "5%");
  $("#btn1").css("height", "30%");
  $("#btn1").css("display", "block");
  $("#btn2").css("width", "15%");
  $("#btn2").css("height", "10%");
  if (!hasKey) {
    $("#btn2").css("display", "block");
  } else {
    $("#btn2").css("display", "none");
  }
  $("#btn2").css("left", "35%");
  $("#btn2").css("top", "50%");
  $("#btn3").css("left", "60%");
  $("#btn3").css("top", "47%");
  $("#btn3").css("width", "5%");
  $("#btn3").css("height", "25%");
  $("#btn3").css("display", "block");
  $("#btn4").css("left", "90%");
  $("#btn4").css("top", "40%");
  $("#btn4").css("width", "20%");
  $("#btn4").css("height", "70%");
  $("#btn4").css("display", "block");
  $("#btn1").attr("onClick", "level5();");
  $("#btn2").attr("onClick", "level6();");
  $("#btn3").attr("onClick", "level7();");
  $("#btn4").attr("onClick", "level1();");
}

function level5() {
  console.log('Level 5');
  document.body.style.backgroundImage = "url('/img/level_6.png')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").css("display", "none");
  if (!hasTorch) {
    $("#btn2").css("display", "block");
  } else {
    $("#btn2").css("display", "none");
  }
  $("#btn2").attr("onClick", "fakkel();");
  $("#btn3").attr("onClick", "level8();");
  $("#btn4").attr("onClick", "level4();");
  $("#btn3").css("left", "48%");
  $("#btn3").css("top", "60%");
  $("#btn3").css("width", "10%");
  $("#btn3").css("height", "30%");
  $("#btn4").css("left", "35%");
  $("#btn4").css("top", "80%");
  $("#btn4").css("width", "30%");
  $("#btn4").css("height", "20%");
  $("#btn2").css("left", "28%");
  $("#btn2").css("top", "55%");
  $("#btn2").css("width", "5%");
  $("#btn2").css("height", "20%");
}

function level6() {
  console.log('Level 6 - Sleutel');
  $("#btn2").css("display", "none")
  $("#key").css("display", "block")

  hasKey = true;
}

function level8() {
  console.log('Level 8')
  document.body.style.backgroundImage = "url('/img/level_3.png')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").text("");
  $("#btn1").css("display", "none")
  $("#msg").text("");
  $("#submitbox").css("display", "none")
  $("#inputbox").css("display", "none")
  $("#btn2").css("left", "37%");
  $("#btn2").css("top", "55%");
  $("#btn2").css("display", "block");
  $("#btn2").css("width", "5%");
  $("#btn2").css("height", "20%");
  $("#btn3").css("left", "55%");
  $("#btn3").css("top", "65%");
  $("#btn3").css("display", "block");
  $("#btn4").css("display", "block");
  $("#btn3").css("width", "10%");
  $("#btn3").css("height", "10%");
  $("#btn3").attr("onClick", "kist();");
  $("#btn4").attr("onClick", "level5();");
  $("#btn2").attr("onClick", "level10();");
}

function kist() {
  console.log('Kist');
  $("#msg").text("Code:");
  $("#submitbox").css("display", "block");
  $("#inputbox").css("display", "block");
  $("#btn2").css("display", "none");
  $("#btn3").css("display", "none");
  $("#btn4").css("display", "none");
  $("#btn1").css("display", "block");
  $("#btn1").css("top", "60%");
  $("#btn1").css("left", "40%");
  $("#btn1").css("width", "20%");
  $("#btn1").css("height", "20%");
  $("#btn1").attr("onClick", "level8();");
}

function checkCode() {
  console.log('Checking Code');
  var check = $("#inputbox").val();
  if (Code == check) {
    $("#msg").text("De code was goed");
    CorrectCode = true;
  } else {
    $("#msg").text("false");
  }
}