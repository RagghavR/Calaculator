function setup() {
  createCanvas(400, 400);
  num1 = createInput();
  num1.position(5,50)
  num2 = createInput();
  num2.position(200,50)
  b1 = createButton("add");
  b1.position(10,200);
  b1.mousePressed(add)
  b2 = createButton("subtract");
  b2.position(80,200);
  b2.mousePressed(subtract)
}
function add(){
  console.log(n1+n2)
}
function subtract(){
  console.log(n1-n2)
}
function draw() {
  background(220);
  n1=parseInt(num1.value());
  n2=parseInt(num2.value());
}