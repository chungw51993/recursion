// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var allElements = [];
  node = node || document.body;
  var childNodes = node.childNodes;

  if (node.classList && node.classList.contains(className)) {
    allElements.push(node);
  }

  if (childNodes) {
    for (var i = 0; i < childNodes.length; i++) {
      allElements = allElements.concat(getElementsByClassName(className,childNodes[i]));
    }
  }

  return allElements;
};
