// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var currentIndex;
  var nextIndex;

  var nextChar = function() {
    currentIndex +=;
    nextIndex = json.charAt(currentIndex);
    return nextIndex;
  }

  var value = function() {
    switch(nextIndex) {
      case '{':
        return object();
      case '[':
        return array();
      case '\"':
        return string();
      case 't':
      case 'f':
        return boolean();
      case 'n':
        return nully();
      default:
        if(nextIndex === '-' || (nextIndex && nextIndex >= 0 && nextIndex <= 9)) {
          return number();
        } else {
          error('bad JSON');
        }
      break;
    }
  }

  var nully = function() {
    var nully = '';
    if (nextIndex === 'n') {
      for (var i = 0; i <= 4; i++) {
        nully += nextIndex;
        nextChar();
      }
      if (nully === 'null') {
        return null;
      } else {
        error('bad null');
      }
    }

    error('bad null');
  }
};
