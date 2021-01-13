class rope{
    constructor(body1,body2,offsetX,offsetY,color){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        this.color=color;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
      }
    display(){
        var A=this.rope.bodyA.position;
        var B=this.rope.bodyB.position;
        push ();
        stroke (this.color); 
        strokeWeight(2);
        line (A.x,A.y,B.x-this.offsetX,B.y+this.offsetY);
        pop ();

    }
}