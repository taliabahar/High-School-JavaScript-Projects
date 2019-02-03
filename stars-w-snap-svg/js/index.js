// CANVAS
var canvas = document.getElementById('canvas-full');
var ctx = canvas.getContext("2d");

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setupCanvas();
window.onresize = function() {
  setupCanvas();
};


// DRAWS BIG YELLOW STARS
function drawStars(obj) {
  ctx.fillStyle = obj.color;
  ctx.font = "20px Arial";
  ctx.fillText("★",obj.x,obj.y);
}

// DRAWS TINY WHITE STARS
function drawSmallStars(obj) {
  ctx.fillStyle = "#fff";
  ctx.font = "12px Arial";
  ctx.fillText("✦",obj.x+Math.random(),obj.y);
}

//___________________animation loop ___________________
function cycle(){

  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
// YELLOW STARS
var stars = [];
function makeStars(num) {
  for (var i = 0; i < num; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      color: randomColor({
        hue: 'yellow'
      }),
    })
  }
}

makeStars(90);
ctx.globalCompositeOperation = "lighten";
for (var i = 0; i < stars.length; i++) {
  drawStars(stars[i])
};

// TINY STARS
smallStars=[]
function makeSmall(num) {
  for (var i = 0; i < num; i++) {
    smallStars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    })
  }
}


makeSmall(150);
for (var i = 0; i < smallStars.length; i++) {
  drawSmallStars(smallStars[i])
};
  
}
 window.setInterval(cycle, 400);