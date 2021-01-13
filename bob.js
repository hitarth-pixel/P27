class bob {

    constructor(x, y,radius,color) {
        var options = {
            isStatic:false,
             restitution:0.3,
              friction:0.5,
              density:2.0
          }
        this.body = Bodies.circle(x,y,radius,options);
         World.add(world, this.body);
         this.radius=radius;
         this.color=color;
         //this.image=loadImage("paper.png");

      }
      display(){
        var pos =this.body.position;
       
       
        push();
        fill (this.color)
        stroke (this.color); 
        strokeWeight(2);
        circle(pos.x,pos.y,this.radius);
        
        //rectMode(CENTER);
        translate(pos.x, pos.y);
       
       
        //imageMode(CENTER);
        //image(this.image,0, 0, 40,40);

        pop();
      }




}