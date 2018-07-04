const calculateDistance = (x2, y2) => {
  const  x1 = 0;
  const  y1 = 0;
  let firstParam = 0;
  let secondParam = 0;
  if(x1 < x2) {
   firstParam =  -(x1 - x2);
} else {
   firstParam = x1 - x2;
}

  if(y1 < y2) {
     secondParam =  -(y1 - y2);
  } else {
     secondParam = y1 - y2;
  }

  return console.log(firstParam + secondParam + " steps is required to get to 1");
}


let findCoords = (a) => {
var b = Math.floor(Math.sqrt(a));
var c = 0;
if(b%2 !==0) {
   c = b*b;
} else {
  c = (b-1)*(b-1);
}


var steps = a - c;
console.log("steps to ", steps);
console.log("square root is ", c);
var x = 0;
var y = 0;

for(var i = 3; i < a; i++) {
  if(i%2 !==0){ //every time i is odd, increment x by 1 and decrement y by 1

// setting starting coords to count spiral steps to number a
    x++;
    y--;

  if(c === i * i ) { //when i hits the biggest square root smaller than {a} exits the loop
    console.log("start x ", x);
    console.log("start y", y);
//first column up (npr. 10 - 13 uključujući ili 26 - 31 uključujući)
    if(steps > 1 && steps <= Math.sqrt(c) + 1) {
      y = y + steps-1;

    }

    // first row right to left (npr. 14 -17 ili 32 - 37 uključujući)
    if(steps > (Math.sqrt(c) + 1) && steps <= (Math.sqrt(c) + 1) * 2) {
       x = x + ((Math.sqrt(c) + 2) - steps);
       y = y + Math.sqrt(c);


    }

      // second column from top to bottom (npr. 18 - 21 ili 38 - 39 uključujući)
    if(steps > (Math.sqrt(c) + 1) * 2 && steps <= ((Math.sqrt(c)) + 1) * 3 ) {
      x = x - (Math.sqrt(c));
      y = y -1 + ((Math.sqrt(c) + 1) * 3) - steps;

    }

      // second row from left to right (npr. 22 - 24 ili 44 - 48)
    if(steps > ((Math.sqrt(c)) + 1) * 3  && steps <= ((Math.sqrt(c) + 1) * 4) + 1) {
      y = y - 1;
      x = x - ((Math.sqrt(c) + 1) * 4) + (steps + 1);
    }
    break;
  }
 }
}
// console.log("x coord ", x);
// console.log("y coord", y);
return calculateDistance(x, y);
}

findCoords(325489);
