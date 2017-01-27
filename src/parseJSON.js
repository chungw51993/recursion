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
  };

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
  };

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
  };

  var boolean = function() {
    var bool = '';
    if (nextIndex === 't') {
      _.times(4, function() {
        bool += nextIndex;
        nextChar();
      });
      if (bool === 'true') {
        return true;
      } else {
        error('bad bool');
      }
    } else if (nextIndex === 'f') {
      _.times(5, function() {
        bool += nextIndex;
        nextChar();
      });
      if (bool === 'false') {
        return false;
      } else {
        error('bad bool');
      }
    }

    error('bad bool');
  };

  var number = function() {
    var number = '';
    function getDigits() {
      while (nextIndex && nextIndex >= 0 && nextIndex <= 9) {
        number += nextIndex;
        nextChar();
      }
    }

    if (nextIndex === '-') {
      number += nextIndex;
      nextChar();
    }

    getDigits();

    if (nextIndex === '.') {
      number += nextIndex;
      nextChar();
      getDigits();
    }

    if (nextIndex === 'e' || nextIndex === 'E') {
      number += nextIndex;
      nextChar();
      if(nextIndex === '-' || nextIndex === '+') {
        number +=nextIndex;
        nextChar();
      }
      getDigits();
    }

    if (!isNaN(Number(number))) {
      return Number(number);
    } else {
      error('bad number');
    }
  };

  var escapes = {
    'b': '\b',
    'n': '\n',
    't': '\t',
    'r': '\r',
    'f': '\f',
    '\"': '\"',
    '\\': '\\'
  };

  var string = function() {
    var string = '';
    if (nextIndex !== '\"') {
      error('string should start with \"');
    }
    nextChar();
    while(nextIndex) {
      if (nextIndex === '\"') {
        nextChar();
        return string;
      }

      if (nextIndex === '\\') {
        nextChar();
        if (escapes.hasOwnProperty(nextIndex)) {
          string += escapes[nextIndex];
        } else {
          string += nextIndex;
        }
      } else {
        string += nextIndex;
      }
      nextChar();
    }
    error('bad string');
  };
};
