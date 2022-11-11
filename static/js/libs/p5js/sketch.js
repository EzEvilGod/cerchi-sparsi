let w = 800
let h = 600
let circleEscape = 0
let x,y,d,a,color1,color2,color3

function setup()
{
    createCanvas(w,h)
    background("pink")
}

function draw()
{
    dati(x,y,d,a,color1,color2,color3)
    circle(x,y,d)
    strokeWeight(1)
    fill(color1, color2, color3, a)

}

function dati()
{
    x = random(0,w)
    y = random(0,h)
    d = random(30,90)

    color1 = random(0,255)
    color2 = random(0,255)
    color3 = random(0,255)
    a = random(0,255)
}
