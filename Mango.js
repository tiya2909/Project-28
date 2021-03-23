class Mango {
    constructor(x, y) {
        var options = {
          isStatic : true,
          restitution:0,
          friction:1
        }
        this.body = Matter.Bodies.circle(x,y,50,options)
        this.radius = 50;
        this.image = loadImage("Sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
      
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, this.body.position.x , this.body.position.y, 60, 30);
        
      }
    }