class bird {
    constructor (x,y){
        var option = {
            restitution : 1.0,
            friction : 0.6,
            density : 0.4,
        }
     this.body = Bodies.rectangle(x,y,50,50,option);
     this.width = 50;
     this.height = 50;
     World.add(world,this.body);   
    }
  display () {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var angle = this.body.angle;
      push ();
      translate (this.body.position.x , this.body.position.y);
      rotate (angle);
      rectMode(CENTER);
      fill ("yellow")
      rect(0,0, this.width, this.height);
      pop ();
  }  

}