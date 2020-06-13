// 1. Copy and paste your prototype in here and refactor into class syntax.

class newCuboidMaker{
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume(){
        return this.length*this.width*this.height;
    };

    surfaceArea(){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
    };
}

let newCuboid = new newCuboidMaker(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends newCuboidMaker{
    constructor(length){
        super(length);
    }
    volume(){
        return Math.pow(this.length,3);
    }
    surfaceArea() {
        return Math.pow(this.length,2)*6;
    }
}

let newCube = new CubeMaker(5);
console.log(newCube);

console.log(newCube.volume());
console.log(newCube.surfaceArea());