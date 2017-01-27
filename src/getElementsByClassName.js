// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var allElements = [];
  var node = document.body || node;

  if (node.classList && node.classList.contains(className)) {
    allElements.push(node);
  }
};
