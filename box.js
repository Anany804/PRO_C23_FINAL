class Box{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1,
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
}