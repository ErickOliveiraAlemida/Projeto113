function preload(){
}

function draw(){
image(video, 200, 100, 360, 200)
}

function setup(){
canvas = createCanvas(720, 400)
canvas.center()
video = createCapture(VIDEO)
video.size(360, 200)
video.hide()
background(200)
fill(204,101,192,127)
stroke(127, 63, 12)
rect(40, 120, 100, 40)
ellipse(350, 350, 80, 80)
triangle(300, 100, 320, 100, 310, 80);
}

function takeSnapshot (){
  save("minha.foto.png")
}
