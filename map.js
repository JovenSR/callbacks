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

var cool = map(words, function(word) {
  return word.length;
});

console.log(cool);


var cool1 = map(words, function(word) {
  return word.toUpperCase();
});

console.log(cool1);

var cool2 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(cool2);

