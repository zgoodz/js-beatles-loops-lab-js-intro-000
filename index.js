function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(array) {
  var storeArray = []
  let i = 0
  while (i < array.length) {
    storeArray.push(`${array[i]}!!!`);
    ++i;
  }
  return storeArray
}

function iLoveTheBeatles(number) {
  let newArray = []
  do {
    newArray.push("I love the Beatles!");
    ++number;
  }
    while (number < 15);
    
    return newArray;
}