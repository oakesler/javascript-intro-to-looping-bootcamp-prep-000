const array = [];

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i > 1) {
      array.push(`I am ${i} strange loops.`) }
      else {
        array.push("I am 1 strange loop.");
      }
    }
  return array;
}

function whileLoop(n) {
  let countdown = n; 
    while (countdown > 0) {
      console.log(--countdown);
    }
  return "done";
}

var newarray = [];

function doWhileLoop(newarray) {
  function incrementVariable() {
    i = i + 1;
  }
  do {
    newarray.unshift(i)
  }
    while (i > 0);
  return array;
}