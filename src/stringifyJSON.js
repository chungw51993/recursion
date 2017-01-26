// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
var string = '';

if (typeof obj === 'boolean' || typeof obj === 'number' || obj === undefined || obj === null) {
  return string + obj;
} else if (typeof obj === 'string') {
  return '"' + obj + '"';
}

};
