 class Plinko {
   constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          radious:10
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      fill("black");

    }
 }