// OBJECT ORIENTED PROGRAMMING(OOP)//
// Object = BOX

// create class: designing part or blueprint of an object
// constructor(): Factory where manufacturing is done


class Box{
    constructor(x, y, w, h, vx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    }

    display(){
        rect(this.x, this.y, this.w, this.h)
    }

    move(){
      this.x = this. x + this.vx;  
    }
  }