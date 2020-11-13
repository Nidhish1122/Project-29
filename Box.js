class Box
{
  constructor(x, y, width, height){
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }

  display( color )
  {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill( color );
    imageMode(CENTER);
    rect(-10, 0, this.width, this.height);
    pop();
  }

}
