class Box {
    constructor(x,y,w,h){
        var ball_options ={
            friction:1,
            density:1,
            restitution: 0.8
        }
    
        this.body = Bodies.rectangle(x,y,w, h,ball_options);
        this.w = w
        this.h = h
        World.add(world,this.body);

    }

    display(){
       var angle = this.body.angle
       var pos = this.body.position
       push();
       translate(pos.x,pos.y)
       rotate(angle)
       fill("red");
       rect(0,0,this.w,this.h)
       pop();
    }
    
}