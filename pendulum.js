class Pendulum{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,50,{isStatic:true})
        this.x=x
        this.y=y
        this.r=50
        this.Diameter=this.r*2
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        fill("pink")
        ellipse(pos.x,pos.y,this.r)
    }
}