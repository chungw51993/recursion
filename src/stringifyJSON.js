// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var string = '';
var arrayValues = [];
var objectValues = [];
var objectProp;
var objectValue;

if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
  return string + obj;
} else if (typeof obj === 'string') {
  return '"' + obj + '"';
} else if (Array.isArray(obj)) {
  if (obj[0] === undefined) {
    return '[]';
  } else {
    for (var i = 0; i < obj.length; i++) {
      arrayValues.push(stringifyJSON(obj[i]));
    }
  }
  return '[' + arrayValues + ']';
} else if (typeof obj === 'object') {
  var objectArray = [];
  for (var prop in obj) {
    objectValue = obj.prop;
    objectProp = prop;
    if (typeof objectValue === 'boolean' || typeof objectValue === 'number' || objectValue === null) {
      objectArray.push('"' + objectProp + '"' + objectValue);
    } else if (typeof objectValue === 'string') {
      objectArray.push('"' + objectProp + '"' + '"' + objectValue + '"');
    } else if (typeof objectValue === undefined || typeof objectValue === 'function') {
      objectArray.push('');
    } else if (typeof objectValue === 'object') {
      objectArray.push('"' + objectProp + '"' + stringifyJSON(objectValue));
    }
  }
  return '{' + objectArray + '}';
}

};
