// BUTTONS 
document.getElementById("sound").addEventListener("click", playSound)

function playSound() {
  document.getElementById("music").play();
  document.getElementById("sound").removeEventListener("click", playSound, false);
  document.getElementById("sound").addEventListener("click", startRain, false);
  document.getElementById("rain").play();
}

// SETS UP SNAP
s = Snap(window.innerWidth, window.innerHeight);

// CLOUDS
cloud1 = s.circle(30,25,43);
cloud2 = s.circle(97,25,47);
cloud3 = s.circle(100,50,40);
cloud4 = s.circle(150,16,45);

cloud5 = s.circle(200,25,40);
cloud6 = s.circle(350,25,51);
cloud7 = s.circle(280,50,48);
cloud8 = s.circle(260,20,49);

cloud20 = s.circle(455,15,41);
cloud21= s.circle(500,4,36);
cloud22 = s.circle(390,7,30);
cloud23 = s.circle(560,6,33);

cloud9 = s.circle(620,30,40);
cloud10 = s.circle(740,28,51);
cloud11 = s.circle(680,20,48);
cloud12 = s.circle(789,15,49);

cloud13 = s.circle(1000,5,49);
cloud14 = s.circle(950,15,49);
cloud15 = s.circle(1070,15,49);

cloud16 = s.circle(innerWidth-30,5,52);
cloud17 = s.circle(innerWidth,15,49);
cloud18 = s.circle(innerWidth-100,20,45);
cloud19 = s.circle(innerWidth-150,15,45);

var clouds =s.group(cloud1,cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8,cloud9,cloud11,cloud12,cloud10,cloud13,cloud14,cloud15,cloud16,cloud17,cloud18,cloud19,cloud20,cloud21,cloud22,cloud23);

clouds.attr({
  fill:"white"
});

// CORN
var corn2 = s.ellipse(window.innerWidth / 2, window.innerHeight / 2 - 30, 80, 250)
corn2.attr({
  fill: "rgba(228, 211, 43, 0.6)",
});

var corn = s.ellipse(window.innerWidth / 2, window.innerHeight / 2 - 30, 80, 250)

var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
  fill: "#F2FF30  ",
  stroke: "#F2FF30  ",
  strokeWidth: 5
});

p = p.pattern(0, 7, 8, 10);

corn.attr({
  fill: p
});

// CORN HUSKS 
var husk2 = s.ellipse(window.innerWidth / 2 - 50, window.innerHeight / 2, 40, 256)

var husk4 = s.ellipse(window.innerWidth / 2 + 50, window.innerHeight / 2, 40, 256)

var husk5 = s.ellipse(window.innerWidth / 2, window.innerHeight / 2, 40, 255)

husk2.transform('r-9')
husk4.transform('r9')

// var rect1 = s.rect(17, 19, 23, 45);
// var rect2 = s.rect(17, 19, 23, 45);

// rect1.attr({
//   x: window.innerWidth / 2 - 103,
//   y: window.innerHeight / 9-10,
// });

// rect2.attr({
//   x: window.innerWidth / 2 + 81,
//   y: window.innerHeight / 9-10,
// });

// rect1.transform('r-30')
// rect2.transform('r26')

var husks = s.group(husk2, husk4, husk5)
// rect1, rect2 

husks.attr({
  fill: "#99FF6D"
});


// DIRT 
var ground = s.rect(0, 0, window.innerWidth, window.innerHeight);

ground.attr({
  fill: "#54391E",
});

var ground2 = s.rect(0, 0, window.innerWidth, window.innerHeight);

ground2.attr({
  fill: "url(#pathPattern)",
});

function dirt() {

  ground.animate({
    y: window.innerHeight / 2 + 255,
  }, 3000);

  ground2.animate({
    y: window.innerHeight / 2 + 255,
  }, 3000);
 
  
}


      
// RAIN
let rain = [];
  
function cycle() {

  for (var i = 0; i < 30; i++) {
    var rainLength = Math.floor((Math.random() * 11) + 6);
    var x = Math.random() * window.innerWidth;
  }
  
  rain[rain.length] = s.line (x, -rainLength, x, 0).attr({
      stroke: '#5185FD',
      strokeWidth: Math.random() * 5,
      strokeLinecap: "round",
    });

    rain[rain.length-1].animate({
      transform: "t0," + (window.innerHeight+20)
    }, 3400, mina.easeout);
  
  }


// RAINFALL AND MOVING IMAGES
function startRain() {
  //   IMAGES
   var tract = s.image("https://img.clipartfest.com/80114ce8e93d0f1b9e77e6d035584a2a_red20tractor20clipart-transparent-background-old-red-tractor-clipart_600-416.png",0,window.innerHeight-169,160,120)
 tract.animate({
    x: window.innerWidth,
  }, 7000);
var farmer = s.image("https://is04.ezphotoshare.com/2017/03/13/KVl3ma.png",-80,window.innerHeight-144, 110, 100)
farmer.animate({
    x: window.innerWidth,
  }, 10000);
  var cow = s.image("https://is05.ezphotoshare.com/2017/03/14/KV6tIb.png",-200,window.innerHeight-182, 130, 150)
  cow.animate({
    x: window.innerWidth,
  }, 13000);
  var pig = s.image("https://is03.ezphotoshare.com/2017/03/14/KV6p1p.png",-400,window.innerHeight-800, 120, 100)
  pig.animate({
    x: window.innerWidth,
    y: window.innerHeight-179,
  }, 12000);
  
  //   STARTS RAIN + CHANGES COLORS ON 2ND CLICK
  document.getElementById("sound").addEventListener("click", playSound, false);
 
  document.body.style.backgroundColor = "#B3B3B3";

  clouds.attr({
  fill: "#939393"
});
  
  window.setInterval(cycle, 100);
}