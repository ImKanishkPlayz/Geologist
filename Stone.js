class Stone {
  constructor(x, y) {
    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, 80, 40, options);
    this.width = 80;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var stonepos=this.body.position;		

    push();
    translate(stonepos.x, stonepos.y);    
    rotate(CENTER);
    strokeWeight(3);
    stroke('black')
    fill('brown')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
