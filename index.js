function writeCards(names,event) {
  let newArray = [];
  for (let i = 0; i < names.length; i++) {
    //console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }
  return newArray;
}

//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(n) {
  let i=n;
  while (i >= 0) {
    i--
    console.log(i+1);
  }
}

//console.log(countdown(10));