class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

		var options = {
			restitution : 0.3,
			friction : 5,
			denstity : 1
		}
		this.x = x; 
        this.y = y; 
        this.r = 50  
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options) 
        World.add(world, this.body); 
  
    } 
  
    display() { 
      var bobpos = this.body.position; 
      push() 
      translate(bobpos.x, bobpos.y); 
      rectMode(CENTER) 
     // strokeWeight(4); 
      fill(255,0,255) 
      //imageMode(CENTER); 
      //image(this.image, 0,0,this.r, this.r) 
      ellipse(0,0,this.r, this.r); 
      pop() 
    
      } 
    }