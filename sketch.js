// ARRAYS //

// 1, 2 ,3 = num or number data type
// "t", "word"= string data type
// true, false = boolean data type


var arr = ["b","c","d","e", 3, 5, "text", "8", false];
arr.push("Nathan", "Hi");

arr.pop();
//console.log(arr);
//*********************************************************************************//

// STORING DATA //
// Storing data for the Student: name, grade, age, fav_subject, marks //

var Student = {
    name : "Nathan",
    grade: 8,
    age: 12,
    fav_subject: "Math",
    marks : [35, 43, 45, 40]
}

var car;

function setup(){
  createCanvas(400, 400);

  car = new Box(100, 200, 40, 20, 4);

    console.log(Student.marks);
}

function draw(){
    background(0);

    car.display();
    car.move();
}

//*******************************************************************//










