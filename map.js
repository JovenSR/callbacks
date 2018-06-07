var words = ["ground", "control", "to", "major", "tom"];

function map(arr, action) {
  var newArr = []
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var ret = action(item);
    newArr.push(ret);

  }
  return newArr;
}

var strLength = map(words, function(word) {
  return word.length;
});

console.log(strLength);


var strUpperCase = map(words, function(word) {
  return word.toUpperCase();
});

console.log(strUpperCase);

var strReverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(strReverse);

