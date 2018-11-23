let hasKey = false;
let hasTorch = false;
let CorrectCode = false;
let CodeCracked = true;
const Code = Math.floor(1000 + Math.random() * 9999);
let doorsound = new Audio("sound/lidcreak.mp3");

let delay = (function () {
  let timer = 0;
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
  console.log("startup");
  document.body.style.backgroundColor = "#42474f";
  $("#startBtn").attr("onClick", "level1();");
  $("#btn1, #btn2, #btn3, #btn4").css("display", "none");
  $("#startBtn").css({
    display: "block",
    left: "40%",
    top: "50%",
    width: "20%",
    height: "10%",
    opacity: "10"
  });
  $("#startBtn").text("start");
}

function level1() {
  $("#startBtn").css("display", "none");
  document.body.style.display = "center";
  console.log('Level 1');
  document.body.style.backgroundImage = "url('img/level_1.jpg')";
  $("#btn1, #btn3, #btn4").css("display", "block");
  $("#btn1, #btn4").css("top", "30%");
  $("#btn1, #btn4").css("width", "10%");
  $("#btn1").attr("onClick", "level2();");
  $("#btn3").attr("onClick", "level4();");
  $("#btn4").attr("onClick", "level9();");
  $("#btn1").css({
    left: "35%",
    height: "38%"
  });
  $("#btn2").css("display", "none");
  $("#btn3").css({
    left: "68%",
    top: "25%",
    width: "15%",
    height: "23%"
  });
  $("#btn4").css({
    left: "90%",
    height: "50%"
  });
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
    $("#key").css("display", "none")
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
  document.body.style.backgroundImage = "url('img/level_2.png')";
  document.body.style.backgroundSize = "cover";
  console.log('Level 4');
  if (!hasKey) {
    $("#btn2").css("display", "block");
  } else {
    $("#btn2").css("display", "none");
  }
  $("#btn1, #btn3").css("width", "5%");
  $("#btn1, #btn3, #btn4").css("display", "block");
  $("#btn1").css({
    left: "30%",
    top: "30%",
    height: "30%"
  });
  $("#btn2").css({
    width: "15%",
    height: "10%",
    left: "35%",
    top: "50%"
  });
  $("#btn3").css({
    left: "60%",
    top: "47%",
    height: "25%"
  });
  $("#btn4").css({
    left: "90%",
    top: "40%",
    width: "20%",
    height: "70%"
  });
  $("#btn4").click(function () {
    doorsound.play();
  });
  $("#btn1").attr("onClick", "level5();");
  $("#btn2").attr("onClick", "level6();");
  $("#btn3").attr("onClick", "level7();");
  $("#btn4").attr("onClick", "level1();");
}

function level5() {
  console.log('Level 5');
  document.body.style.backgroundImage = "url('img/level_6.png')";
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
  $("#btn3").css({
    left: "48%",
    top: "60%",
    width: "10%",
    height: "30%"
  });
  $("#btn4").css({
    left: "35%",
    top: "80%",
    width: "30%",
    height: "20%"
  });
  $("#btn2").css({
    left: "28%",
    top: "55%",
    width: "5%",
    height: "20%"
  });
}

function level6() {
  console.log('Level 6 - Sleutel');
  $("#btn2").css("display", "none")
  $("#key").css("display", "block")

  hasKey = true;
}

function level8() {
  console.log('Level 8')
  document.body.style.backgroundImage = "url('img/level_3.png')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").text("");
  $("#btn1").css("display", "none")
  $("#msg").text("");
  $("#submitbox, #inputbox").css("display", "none")
  $("#btn2").css({
    left: "37%",
    top: "55%",
    width: "5%",
    height: "20%"
  });
  $("#btn2, #btn3, #btn4").css("display", "block");
  $("#btn3").css({
    left: "55%",
    top: "65%",
    width: "10%",
    height: "10%",
  });
  $("#btn4").css("height", "35%")
  $("#btn2").attr("onClick", "level10();");
  $("#btn3").attr("onClick", "kist();");
  $("#btn4").attr("onClick", "level5();");
}

function kist() {
  console.log('Kist');
  $("#msg").text("Code:");
  $("#submitbox, #btn1, #inputbox").css("display", "block");
  $("#btn2, #btn3, #btn4").css("display", "none");
  $("#btn1").css({
    top: "60%",
    left: "40%",
    width: "20%",
    height: "40%"
  });
  $("#btn1").attr("onClick", "level8();");
}

function checkCode() {
  console.log('Checking Code');
  let check = $("#inputbox").val();
  if (Code == check) {
    $("#msg").text("De deur rechts van je is geopend.");
    CodeCracked = true;
    CorrectCode = true;
  } else {
    $("#msg").text("false");
  }
}

function level10() {
    if (!CodeCracked) {
      $("#msg").text("De deur zit op slot!");
      delay(function () {
        console.log("op slot");
        $("#msg").text("");
      }, 1500);
    } else {
      $("#msg").text("");
      console.log("Geopend");
      document.body.style.backgroundImage = "url('img/boss.jpg')";
      document.body.style.backgroundSize = "cover";
      $("#btn4, #btn2, #btn3").css("display", "none");
      $("#startBtn").attr("onClick", "Fireball();");
      $("#startBtn").text("Start bossfight");
      $('#startBtn').css('border-radius', '50%');
      $("#startBtn").css({
        left: "47%",
        top: "40%",
        width: "10%",
        height: "40%",
        display: "block"
      });
      Fireball();
    }
  }

function Fireball() {
  $("#shield").css("display", "block");
  $("#fireball").css("display", "block");
  $("#startBtn").css("display", "none");
  var elem = document.getElementById("fireball");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 2000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}

$(document).on('keydown', function (e) {
  switch (e.key) {
    case "ArrowUp":
      $('#shield').animate({
        top: "-=20px"
      }, 'fast');
      break;
    case "ArrowDown":
      $('#shield').animate({
        top: "+=20px"
      }, 'fast');
      break;
  }
});