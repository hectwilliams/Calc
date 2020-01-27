import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ViewCss from './ModeView.css'

const View = ({blocksCount}) => {

  const [dataCount, OpenParenthesisCount] = useState(0);

  return (

    <div className = {ViewCss.container}>

      <div className = {ViewCss.itemBar_}> </div>         {/* Black BAR */}

      <div data-count = {blocksCount} className = {ViewCss.itemView_}>

        {/* Buttons */}
        <span className = {ViewCss.blocks} >
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>

          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>

          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'%'} className = {ViewCss.item}> {'%'} </button>
          <button onClick = {buttonClicked} value = {'e^x'} className = {ViewCss.item}> {'e^x'} </button>
          <button onClick = {buttonClicked} value = {'C'} className = {ViewCss.item}> {'C'} </button>
          <button onClick = {buttonClicked} value = {'del'} className = {ViewCss.item}> {'del'} </button>

          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'x^2'} className = {ViewCss.item}> {'x^2'} </button>
          <button onClick = {buttonClicked} value = {'π'} className = {ViewCss.item}> {'π'} </button>
          <button data-count = {0} onClick = {buttonClicked} value = {'('} className = {ViewCss.item}> {'('} </button>
          <button onClick = {buttonClicked} value = {')'} className = {ViewCss.item}> {')'} </button>
          <button onClick = {buttonClicked} value = {'÷'} className = {ViewCss.item}> {'÷'} </button>

          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'x^3'} className = {ViewCss.item}> {'x^3'} </button>
          <button onClick = {buttonClicked} value = {'1/x'} className = {ViewCss.item}> {'1/x'} </button>
          <button onClick = {buttonClicked} value = {9} className = {ViewCss.item}> {'9'} </button>
          <button onClick = {buttonClicked} value = {8} className = {ViewCss.item}> {'8'} </button>
          <button onClick = {buttonClicked} value = {7} className = {ViewCss.item}> {'7'} </button>
          <button onClick = {buttonClicked} value = {"*"}className = {ViewCss.item}> {'x'} </button>

          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'|x|'} className = {ViewCss.item}>  {'|x|'} </button>
          <button onClick = {buttonClicked} value = {'n!'} className = {ViewCss.item}>  {'n!'} </button>
          <button onClick = {buttonClicked} value = {4} className = {ViewCss.item}> {'4'} </button>
          <button onClick = {buttonClicked} value = {5} className = {ViewCss.item}> {'5'} </button>
          <button onClick = {buttonClicked} value = {6} className = {ViewCss.item}> {'6'} </button>
          <button onClick = {buttonClicked} value = {"-"}className = {ViewCss.item}> {'-'} </button>

          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'2^x'} className = {ViewCss.item}> {'2^x'} </button>
          <button onClick = {buttonClicked} value = {'3√'} className = {ViewCss.item}> {'3√'} </button>
          <button onClick = {buttonClicked} value = {'2√'} className = {ViewCss.item}> {'2√'} </button>
          <button onClick = {buttonClicked} value = {1} className = {ViewCss.item}> {'1'} </button>
          <button onClick = {buttonClicked} value = {2} className = {ViewCss.item}> {'2'} </button>
          <button onClick = {buttonClicked} value = {3} className = {ViewCss.item}> {'3'} </button>
          <button onClick = {buttonClicked} value = {"+"}className = {ViewCss.item}> {'+'} </button>

          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked}  value = {'y√x'} className = {ViewCss.item}> {'y√x'} </button>
          <button onClick = {buttonClicked}  value = {"+/-"} className = {ViewCss.item}> {'+/-'} </button>
          <button onClick = {buttonClicked}  value = {0} className = {ViewCss.item}> {'0'} </button>
          <button onClick = {buttonClicked}  value = {'.'} className = {ViewCss.item}> {'.'} </button>
          <button data-buffer = {0} onClick = {buttonClicked}  value = {"="}className = {ViewCss.item}> {'='} </button>
        </span>

        <span className = {ViewCss.output}>
          <span>{0}</span>
        </span>

      </div>

      <div className = {ViewCss.itemBar_}> </div>         {/* Black BAR */}

    </div>
  )
}
export default View;

const buttonClicked = (event) => {
  let eventNode =  event.currentTarget;
  let parentNode = eventNode.parentNode;
  let resultNode = parentNode.nextSibling.childNodes[0];
  let op = event.currentTarget.value;
  let constants = {'π': Math.PI};

  let binaryOps = ['*', '+', '-', '%', '÷','y√x', 'e^x'];
  let UnaryOps = ['√', 'x^3', 'x^2', '1/x', '+/-', 'n!', '|x|', '2√', '3√', '2^x'];
  let booleanArray = [binaryOps.includes(op), UnaryOps.includes(op)];
  let balanced = isBalanced(resultNode.innerHTML);
  let temp;

  if (resultNode.innerHTML === 'NaN') {
    resultNode.innerHTML = 0;
  }

/* BINARY OPERATIONS */
  if (booleanArray[0] && resultNode.innerHTML.match(/[0-9\)]$/)) {

    if (op === '*') {

      resultNode.innerHTML += '*';

    } else if (op === '+') {

      resultNode.innerHTML += '+';

    } else if (op === '-') {

      resultNode.innerHTML += '-';

    } else if (op === '÷') {

      resultNode.innerHTML += '÷';

    } else if (op === '%') {

      resultNode.innerHTML += '÷';

    } else if (op === 'y√x') {
      let y = parseInt(prompt("Enter y value", 2));
      let x = parseFloat(resultNode.innerHTML);

      if (!Number.isFinite(y) || !x )
        return;

      console.log(x ** (1/y));  // TODO - replace prompt with modal

    } else if (op === 'e^x') {
      let case0 = resultNode.innerHTML.match(/^\(\d+\)$|^\(\d+\.\d+\)$/);
      let case1 = resultNode.innerHTML.match(/\(\d+\.\d+|\(\d+(?=\)$)/);
      let case2 = resultNode.innerHTML.match(/\d+$|\d+\.\d+$/);
      let case3 = resultNode.innerHTML.match(/(\(*\()(?!\()/g);

      console.log(case0, case1, case2, case3);
      temp = resultNode.innerHTML;

      if (!isBalanced(resultNode.innerHTML)) return;

      if (case0)
        resultNode.innerHTML = resultNode.innerHTML.slice(0,case0.index) +  'e^(' + case0[0].slice(1);

      else if (case1)
        resultNode.innerHTML = resultNode.innerHTML.slice(0,case1.index) +  'e^(' + case1[0].slice(1) + ')';

      else if (case2)
        resultNode.innerHTML = resultNode.innerHTML.slice(0, case2.index) +  'e^(' + case2[0].slice(0) + ')';

      else if (case3) {
        let obj = case3.reduce((result, token, i) => {
          let searchedIndex = result.string.indexOf(token);
          result.index += searchedIndex;
          result.string = ' ' + result.string.slice(searchedIndex + 1);
            return result;
          }, {index: 0, string: resultNode.innerHTML, len: resultNode.innerHTML.length});

        resultNode.innerHTML = resultNode.innerHTML.slice(0, obj.index) +  'e^' + resultNode.innerHTML.slice(obj.index) ;
      }

      if (resultNode.innerHTML.indexOf('e^e^') !== -1)
        resultNode.innerHTML = temp;

    }

  }

/* UNARY OPERATIONS */
  if ( booleanArray[1] && !booleanArray[0] && resultNode.innerHTML.match(/^\d(?![÷+\-*])/) ) {

    if (op === '2^x') {

      resultNode.innerHTML = 2**parseFloat(resultNode.innerHTML);

    } else if (op === '2√') {

      resultNode.innerHTML = parseFloat(resultNode.innerHTML)**(1/2) ;

    } else if (op === '3√') {

      resultNode.innerHTML = parseFloat(resultNode.innerHTML)**(1/3) ;

    } else if (op === 'x^3') {

      resultNode.innerHTML = parseFloat(resultNode.innerHTML)**3;

    } else if (op == 'x^2') {

      resultNode.innerHTML = parseFloat(resultNode.innerHTML)**2;

    } else if (op === '1/x') {

      resultNode.innerHTML = 1 / parseFloat(resultNode.innerHTML);

    } else if (op === '+/-') {  // toggle[+,-] integer value

      resultNode.innerHTML = parseFloat(resultNode.innerHTML) * -1;

    } else if (op === 'n!') {

      let result = 1;
      temp = parseInt(resultNode.innerHTML);

      for ( ; temp > 0; temp--) {
        result *= temp;
      }

      if (resultNode.innerHTML != 0)
        resultNode.innerHTML = result;

    } else if (op === '|x|') {

      resultNode.innerHTML = Math.abs(resultNode.innerHTML);

    }

  }

  /* NOT AN OPERATION */
  if (booleanArray.every((x) => x === false)) {

    if ((constants[op] || op.match(/[0-9]/))  ) {
      temp = (constants[op]) || parseFloat(op);

      if (resultNode.innerHTML.match(/^0$/))
        resultNode.innerHTML = temp;

      else if (resultNode.innerHTML.match(/[0-9]$/) && constants[op])
      resultNode.innerHTML = resultNode.innerHTML;

      else if ( resultNode.innerHTML.slice(-1).match(/[0-9*+-÷\()]/g))
        resultNode.innerHTML += temp;

    } else if (op === ')') { // CLOSE PARENTHESIS

      if (resultNode.innerHTML.match(/(?<=\(\d+)\d+\.\d|\)|\d$/) && !balanced  && !resultNode.innerHTML.match(/[\(*+\-÷]$/) ) {

        if (eventNode.previousSibling.dataset.count != 0)
          eventNode.previousSibling.dataset.count = parseInt(eventNode.previousSibling.dataset.count) - 1;

        resultNode.innerHTML += ')';

      }

    } else if (op === '(') { // OPEN PARENTHESIS

      temp = resultNode.innerHTML ;

      if (resultNode.innerHTML.match(/^0$/g))
        resultNode.innerHTML = '(';

      else if (resultNode.innerHTML.match(/.+[\(*+\-÷]$|\($/g))
        resultNode.innerHTML += '(';

      if (temp !=resultNode.innerHTML )
      document.querySelector("button[data-count]").dataset.count = parseInt(document.querySelector("button[data-count]").dataset.count) + 1;

      return;

    } else if (op === '.' ) {   // DECIMAL

      if (resultNode.innerHTML.match(/(?<!\.[0-9]*)\d$/))
        resultNode.innerHTML += '.';

    }

  }

  if (op === '=') {  // EQUAL
    if (isBalanced(resultNode.innerHTML))
    resultNode.innerHTML = Parser(resultNode.innerHTML).run() || resultNode.innerHTML;
  }

  /* CLEAR */
  if  (op === 'C') {

    resultNode.innerHTML = 0;
    document.querySelector("button[data-count]").dataset.count = 0 ;

  }

  /* DELETE */
  if (op === 'del') {

    resultNode.innerHTML = (resultNode.innerHTML.length === 1) ? 0 : resultNode.innerHTML.slice(0, resultNode.innerHTML.length - 1);

    document.querySelector("button[data-count]").dataset.count = isBalanced(resultNode.innerHTML)  ? 0 : resultNode.innerHTML.match(/[(]/g).length;

  }

};

/*
  Function: parser
  Purpose: reduce operation, removing parenthesis if possible
*/
const Parser = function(initString) {

  if (!(this instanceof(Parser)))
    return new Parser(initString);

  this.str = initString;

  this.searchParenthesis = function (str) {
    let open = [];
    let tangentList = [];

    str.split('').forEach((ele, index) => {     // find last sub balanced tangent(i.e. parenthesis)

      if (ele === '(')
        open.push(index);

      if (ele === ')')
      tangentList.push([open.pop(), index]);

    });

    if (tangentList.length) {

      if (tangentList[tangentList.length - 1].length === 2) {
        let [a, b] = tangentList[tangentList.length - 1];
        str = str.slice(0, a) + this.searchExponent.call(this, str.slice(a + 1, b)) + str.slice(b + 1);
      }

    }

    while (str.indexOf('(') !== -1) {
      str = this.searchParenthesis.call(this, str);
    }

    return str = this.searchExponent.call(this, str);

  };



  this.searchExponentParser = function (str, heads = [], pairs = [], idx = 0) {

    if (! str.match(/^\(.+\)$/)) {

      while (idx < str.length) {
        if (str.slice(idx).indexOf('e^(') === 0) {
          heads.push(idx);
          idx += 3;
        } else if (str.slice(idx).indexOf('(') === 0)
        heads.push(idx);

        if (str.slice(idx).indexOf(')') === 0)
        pairs.push([heads.pop(), idx]);

        ++idx;
      }

      pairs.filter( element => str[element[0]] === 'e' ).forEach(pair => {
        str = str.slice(0, pair[0]) + '(' +  str.slice(pair[0], pair[1] + 1) + str.slice(pair[1] + 1) +')';
      });

    }

    return this.searchParenthesis.call(this, str);

  };

  this.searchExponent = function (str) {
    const EULER_NUMBER = 2.71828182846;
    const regresult = str.match(/(?<=e\^).*\)/);
    if (regresult) {
      str = this.searchMult.call(this, str.slice(regresult.index,  regresult.index + regresult[0].length));
      str = String( EULER_NUMBER ** parseInt(str.match(/\d+|\d+\.\d+/)));
    }
    return this.searchMult.call(this, str);
  };

  this.searchMult = function (str) {
    let int_int = str.match(/-*\d+\*\d+/);
    let dec_int = str.match(/-*\d+\*\d+\.\d+/);
    let int_dec = str.match(/-*\d+\.\d+\*\d+/);
    let dec_dec = str.match(/-*\d+\.\d+\*\d+\.\d+/);
    let regexObj, a ,b;

    if (int_int)
      regexObj = int_int;
    if (dec_int)
      regexObj = dec_int;
    if (int_dec)
      regexObj = int_dec;
    if (dec_dec)
      regexObj = dec_dec;

    if (regexObj) {
      a = regexObj.index;
      b = a + regexObj[0].length;
      str = str.slice(0, a) + regexObj[0].split('*').reduce((acc, curr) => parseFloat(acc) * parseFloat(curr)) + str.slice(b);
    }

    while (str.indexOf('*') !== -1) {
      if (str.indexOf('*') === str.indexOf('**'))
        break;
      str = this.searchParenthesis.call(this, str);
    }

    return this.searchDiv.call(this, str);

  };

  this.searchDiv = function (str) {
    let int_int = str.match(/-*\d+\÷\d+/);
    let dec_int = str.match(/-*\d+\÷\d+\.\d+/);
    let int_dec = str.match(/-*\d+\.\d+\÷\d+/);
    let dec_dec = str.match(/-*\d+\.\d+\÷\d+\.\d+/);
    let regexObj, a ,b;

    if (int_int)
      regexObj = int_int;
    if (dec_int)
      regexObj = dec_int;
    if (int_dec)
      regexObj = int_dec;
    if (dec_dec)
      regexObj = dec_dec;


    if (regexObj) {
      a = regexObj.index;
      b = a + regexObj[0].length;
      str = str.slice(0, a) + regexObj[0].split('÷').reduce((acc, curr) => parseFloat(acc) / parseFloat(curr)) + str.slice(b);
    }

    while (str.indexOf('÷') !== -1) {
      str = this.searchDiv.call(this, str);
    }

    return this.searchAdd.call(this, str);
  };

  this.searchAdd = function (str) {
    let int_int = str.match(/-*\d+\+\d+/);
    let dec_int = str.match(/-*\d+\+\d+\.\d+/);
    let int_dec = str.match(/-*\d+\.\d+\+\d+/);
    let dec_dec = str.match(/-*\d+\.\d+\+\d+\.\d+/);
    let regexObj, a ,b;

    if (int_int)
      regexObj = int_int;
    if (dec_int)
      regexObj = dec_int;
    if (int_dec)
      regexObj = int_dec;
    if (dec_dec)
      regexObj = dec_dec;


    if (regexObj) {
      a = regexObj.index;
      b = a + regexObj[0].length;
      str = str.slice(0, a) + regexObj[0].split('+').reduce((acc, curr) => parseFloat(acc) + parseFloat(curr)) + str.slice(b);
    }

    while (str.indexOf('+') !== -1) {
      str = this.searchDiv.call(this, str);
    }

    return this.searchSub.call(this, str);
  };

  this.searchSub = function (str) {
    let int_int = str.match(/\d+\-\d+/);
    let dec_int = str.match(/\d+\-\d+\.\d+/);
    let int_dec = str.match(/\d+\.\d+\-\d+/);
    let dec_dec = str.match(/\d+\.\d+\-\d+\.\d+/);
    let regexObj, a ,b;

    if (int_int)
      regexObj = int_int;
    if (dec_int)
      regexObj = dec_int;
    if (int_dec)
      regexObj = int_dec;
    if (dec_dec)
      regexObj = dec_dec;

    if (regexObj) {
      a = regexObj.index;
      b = a + regexObj[0].length;
      str = str.slice(0, a) + regexObj[0].split('-').reduce((acc, curr) => parseFloat(acc) - parseFloat(curr)) + str.slice(b);
    }

    while (str.indexOf('-') !== -1) {
      str = this.searchDiv.call(this, str);
    }

    return str;

  };

  this.run = (str = this.str) => {
    return this.searchExponentParser.call(this, str);
  }

};

/*
  Function: isBalanded
  Purpose: calculates whether input is balanced (via parenthesis)
*/

const isBalanced = (str)=>   {
  let openBraces = [];
  let map = {')': '('}

  for (let c of str) {

    if (c === '(')
      openBraces.push(c);

    if (map[c] === openBraces[openBraces.length - 1] )
      openBraces.pop();

  }

  return openBraces.length === 0;
};

