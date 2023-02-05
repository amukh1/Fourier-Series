let t = 0
let pi = Math.PI
let circ = [0]
let points = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    t = 0
}
  
function draw() {
    clear()
    background(0);
    noFill();
    stroke(255);
    // ellipse(x, y, width, height)
    strokeWeight(2);
    circuli([200, 300], 100, 6, Math.random()*2);
    // points.forEach((p, i) => {
    //     strokeWeight(2);
    //     ellipse(p[0], p[1], 5, 5);
    //     if(points.length > 200){
    //         points.pop()
    //     }
    // })

    // graph the y coordinates, but translated 300 pixels from the circle
    beginShape()
    points.forEach((p,i) => {
        vertex(i+500, p[1])
        // line(p[0],p[1],i+500,p[1])
        if(i == 0) {
            line(p[0],p[1],i+500,p[1])
        }
    })
    endShape()
    t+=0.1
}

function circuli([x,y], rad, n, a) {
    if(!circ[n]) {
        circ[n] = [a]
    }
    console.log(circ[n],t)
    let vals = [rad*cos(circ[n][0]*t)+x, rad*sin(circ[n][0]*t)+y]
    stroke(255, 100)
    ellipse(x, y, 2*rad, 2*rad);
    stroke(255)
    strokeWeight(4);
    // ellipse(x, y, 20, 20);
    ellipse(vals[0], vals[1], 5, 5);
    line(vals[0], vals[1], x, y);
    if(n == 1) points.unshift(vals)
    if(n > 1) {
        circuli(vals, rad/2, n-1,Math.random()*2)
    }

    if(points.length > 500) points.pop()
}