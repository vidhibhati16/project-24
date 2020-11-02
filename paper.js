class paper{

    constructor(x, y){
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
 
        this.x=x;
		this.y=y;
		this.r=r
        
        //correct synatx is this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.body = Bodies.ellipse(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
 
     }
     display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        ellipse(0,0, this.width, this.height);
        pop();
    }



}
