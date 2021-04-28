class Drops{
    constructor (x,y){
        var options = {
            friction : 0.1
        }
    }

    display(){
        this.rain = Bodies.circle(x, y, 5, options);
        this.rain = ellipse(x, y, 5);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)});
        }
    }
}