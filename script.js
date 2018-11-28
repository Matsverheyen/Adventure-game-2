var hasKey = false;
var hasTorch = false;
var codeCracked = false;
var hasSwordHandle = false;
var hasSword = false;
var activated = false;
var diamond1 = false;
var diamond2 = false;
const code = Math.floor(1000 + Math.random() * 9999);
var doorsound = new Audio("sound/lidcreak.mp3");
var jailcell = new Audio("sound/jaildoor.mp3");
var ambient = new Audio("sound/ambient.mp3");
var torchSound = new Audio("sound/torch.mp3");
var fireballsound = new Audio("sound/fireball.mp3");

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
  console.log("startup");
  document.body.style.backgroundColor = "#42474f";
  $("#info").css("display", "block");
  $("#info").text("In dit spel is het de bedoeling dat je probeert te ontsnappen. Dit doe je door middel van te klikken op bijvoorbeeld een deur. Als je over iets wat je kan aanklikken hovert dan zie je je muis veranderen.");
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
  $("#info").css("display", "none");
  $("#info").text("");
  doorsound.play();
  ambient.play();
  $("#msg").text("");
  $("#startBtn").css("display", "none");
  document.body.style.display = "center";
  console.log('Level 1');
  document.body.style.backgroundImage = "url('img/level_1.jpg')";
  $("#btn1, #btn3, #btn4").css("display", "block");
  $("#btn1, #btn4").css("top", "30%");
  $("#btn1, #btn4").css("width", "10%");
  $("#btn1").attr("onClick", "level2();");
  $("#btn3").attr("onClick", "level4();");
  $("#btn4").attr("onClick", "level11();");
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
    jailcell.play();
    $("#key").css("display", "none")
    $("#msg").text("In de cel lag een briefje met een code erop");
    delay(function () {
      $("#msg").text(code);
      delay(function () {
        $("#msg").text("");
      }, 1500);
    }, 1500);
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
  $("#btn4").click(function () {});
  $("#btn1").attr("onClick", "level5();");
  $("#btn2").attr("onClick", "level6();");
  $("#btn3").attr("onClick", "level11();");
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
    torchSound.play();
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
  $("#shield").css("display", "none");
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
  var check = $("#inputbox").val();
  if (code == check) {
    $("#msg").text("De deur links van je is geopend.");
    codeCracked = true;
  } else {
    $("#msg").text("false");
  }
}

function level10() {
  if (!codeCracked) {
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
  fireballsound.play();
  var pos = 0;
  var id = setInterval(frame, 1);
  delay(function () {
    $("#msg").text("Je hebt een diamant gekregen!");
    diamond1 = true;
    $("#btn1").css({
      display: "block",
      top: "50%",
      left: "35%",
      width: "30%"
    })
    $("#btn1").attr("onClick", "level8();");
  }, 4300);

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

function level11() {
  console.log("level 11");
  $("#btn1, #btn2, #btn3").css("display", "none");
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "url('')";
  document.body.style.backgroundSize = "cover";
  if (!hasTorch) {
    $("#msg").text("Het is te donker, je ziet niets!");
    delay(function () {
      level1();
    }, 3000);
  } else {
    $("#torch").css("display", "none");
    document.body.style.backgroundImage = "url('img/level_8.jpg')";
    $("#msg").text("");
    $("#btn1").attr("onClick", "level12();");
    $("#btn2").attr("onClick", "level4();");
    $("#btn3").attr("onClick", "level1();");
    $("#btn1").css({
      display: "block",
      left: "55%",
      top: "20%",
      width: "10%",
      height: "35%",
    });
    $("#btn2").css({
      display: "block",
      top: "30%",
      left: "0%",
      width: "20%",
      height: "40%",
    });
    $("#btn3").css({
      display: "block",
      left: "0%",
      top: "70%",
      width: "40%",
      height: "30%",
    });
  }
  $("#btn4").css("display", "none");
}

function level12() {
  console.log("level 12");
  document.body.style.backgroundImage = "url('img/level_5.jpg')";
  document.body.style.backgroundSize = "cover";
  $("#btn3, #btn4").css("display", "none");
  $("#btn1").attr("onClick", "sword1();");
  $("#btn2").attr("onClick", "level11();");
  $("#btn1").css({
    display: "block",
    left: "50%",
    top: "50%",
    width: "15%",
    height: "30%",
  });
  $("#btn2").css({
    display: "block",
    left: "30%",
    top: "70%",
    width: "30%",
    height: "30%",
  });
}

function sword1() {
  if (!hasSwordHandle) {
    $("#msg").text("Je hebt een handvat gevonden!");
    hasSwordHandle = true;
    $("#sword1").css("display", "block");
    delay(function () {
      level13();
    }, 3000);
  } else {
    level13();
  }
}

function level13() {
  console.log("level 13");
  $("#msg").text("");
  document.body.style.backgroundImage = "url('img/level_9.jpg')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").attr("onClick", "level14();");
  $("#btn2").attr("onClick", "level12();");
  $("#btn3").attr("onClick", "level15();");
  $("#btn4").attr("onClick", "zwaard();");
  $("#btn1").css({
    display: "block",
    left: "5%",
    top: "45%",
    width: "15%",
    height: "35%",
  });
  $("#btn2").css({
    display: "block",
    left: "5%",
    top: "80%",
    width: "90%",
    height: "20%",
  });
  $("#btn3").css({
    display: "block",
    left: "80%",
    top: "40%",
    width: "15%",
    height: "40%",
  });
  if (!hasSword) {
    $("#btn4").css({
      display: "block",
      left: "50%",
      top: "55%",
      width: "25%",
      height: "15%",
    });
  } else {
    $("#btn4").css("display", "none");
  }
}

function zwaard() {
  if (!hasSword) {
    $("#sword2").css("display", "block");
    $("#btn4").css("display", "none");
    hasSword = true;
  }
}

function level14() {
  console.log("level 14");
  $("#diamond").css("display", "none");
  $("#diamond2").css("display", "none");
  document.body.style.backgroundImage = "url('img/level_4.png')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").attr("onClick", "level13();");
  $("#btn2").attr("onClick", "pedestal();");
  $("#btn3").attr("onClick", "level16();");
  $("#btn1").css({
    display: "block",
    left: "5%",
    top: "80%",
    width: "90%",
    height: "20%",
  });
  $("#btn2").css({
    display: "block",
    left: "50%",
    top: "55%",
    width: "10%",
    height: "10%",
  });
  $("#btn3").css({
    display: "block",
    left: "65%",
    top: "30%",
    width: "15%",
    height: "35%",
  });
  $("#btn4").css("display", "none");
}

function pedestal() {
  if (hasSword && hasSwordHandle) {
    $("#btn2").css("display", "none");
    $("#sword1").css("display", "none");
    $("#sword2").css("display", "none");
    $("#msg").text("Je hebt het zwaar in het pedaal gezet!");
    delay(function () {
      $("#msg").text("");
    }, 3000);
    activated = true;
  } else if (hasSword && !hasSwordHandle) {
    $("#msg").text("Je mist het handvat");
    delay(function () {
      $("#msg").text("");
    }, 3000);
  } else if (!hasSword && hasSwordHandle) {
    $("#msg").text("Je mist het zwaard");
    delay(function () {
      $("#msg").text("");
    }, 3000);
  } else {
    $("#msg").text("Je mist het zwaard");
    delay(function () {
      $("#msg").text("");
    }, 3000);
  }
}

function level16() {
  if (!activated) {
    $("#msg").text("De deur is dicht!");
    delay(function () {
      delay(function () {
        $("#msg").text("Stop het zwaard in de steen");
      }, 3000);
      $("#msg").text("");
    }, 3000);
  } else {
    console.log("level 16");
    document.body.style.backgroundImage = "url('img/level_7.png')";
    document.body.style.backgroundSize = "cover";
    $("#btn1").attr("onClick", "level14();");
    $("#btn2").css("display", "none");
    $("#btn3").attr("onClick", "final();");
    $("#btn2").css({
      display: "block",
      left: "15%",
      top: "40%",
      width: "25%",
      height: "35%",
    });
    $("#btn3").css({
      display: "block",
      left: "75%",
      top: "30%",
      width: "15%",
      height: "35%",
    });
  }
}

function final() {
  if (diamond1 && diamond2) {
    $("#diamond").css("display", "block");
    $("#diamond2").css("display", "block");
    delay(function () {
      escaped();
    }, 2000);
  } else if (diamond1 && !diamond2) {
    $("#diamond").css("display", "block");
  } else if (!diamond1 && diamond2) {
    $("#diamond2").css("display", "block");
  } else {
    $("#msg").text("Je hebt geen diamanten!");
    delay(function () {
      $("#msg").text("");
    }, 3000);
  }
}

function escaped() {
  document.body.style.backgroundImage = "url('img/Outside.jpg')";
  document.body.style.backgroundSize = "cover";
  $("#diamond").css("display", "none");
  $("#diamond2").css("display", "none");
  $("#msg").text("Je bent ontsnapt goedzo!");
}

function randomCode() {
  $("#msg").text(code2);
  delay(function () {
    $("#msg").text("");
  }, 2500);
}

function level15() {
  console.log('level 15');
  document.body.style.backgroundImage = "url('img/level10.png')";
  document.body.style.backgroundSize = "cover";
  $("#btn1").attr("onClick", "Diamond();");
  $("#btn2").attr("onClick", "level13();");
  $("#btn1").css({
    display: "block",
    left: "45%",
    top: "45%",
    width: "15%",
    height: "15%",
  });
  $("#btn2").css({
    display: "block",
    left: "0%",
    top: "80%",
    width: "100%",
    height: "25%",
  });
  $("#btn3").css("display", "none");
  $("#btn4").css("display", "none");
}

function Diamond() {
  $("#msg").text("Je hebt een diamant gevonden!");
  delay(function () {
    $("#msg").text("");
  }, 2500);
  diamond2 = true;
}