// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var string = '';

if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
  return string + obj;
} else if (typeof obj === 'string') {
  return '"' + obj + '"';
} else if (Array.isArray(obj)) {
  var arrayValues = [];
  if (obj[0] === undefined) {
    return '[]';
  } else {
    for (var i = 0; i < obj.length; i++) {
      arrayValues.push(stringifyJSON(i));
    }
  }
  return '[' + arrayValues + ']';
} else if (typeof obj === 'object') {
  var arrayValues = [];
  for (var prop in obj) {
    var objectValue = obj[prop];
    var objectProp = prop;
    if (typeof objectValue === 'boolean' || typeof objectValue === 'number' || objectValue === null) {
      arrayValues.push('"' + objectProp + '"' + objectValue);
    } else if (typeof objectValue === 'string') {
      arrayValues.push('"' + objectProp + '"' + '"' + objectValue + '"');
    } else if (typeof objectValue === undefined) {
      arrayValues.push('');
    } else if (typeof objectValue === 'object') {
      arrayValues.push('"' + objectProp + '"' + stringifyJSON(objectValue));
    }
  }
  return '{' + arrayValues + '}';
}

};
