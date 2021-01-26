class CrumpledBall{
    constructor(x,y,radius){
     var options={
  isStatic:false,
        restitution:0.3,
      friction:0.5,
         density:1.2
     }
     this.image=loadImage("paper.png")
     this.body=Matter.Bodies.circle(x,y,radius,options)
     this.body.radius=10
     World.add(world,this.body)
    
    }

    display(){
        var pos=this.body.position
        var rad=this.body.radius
        
        push();
       
        fill("white")
        ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,rad)
       // ellipse.visible=false;        
        pop();

        image(this.image, pos.x-130, pos.y-150, this.width, this.height);
        

    }
}