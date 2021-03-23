class Tree {
    constructor(x, y, width, height) {
        var options = {
          isStatic : true,
          restitution:0.8,
          friction:1.0,
          density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
      
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, 600, 200, this.width, this.height);
        
      }
    }