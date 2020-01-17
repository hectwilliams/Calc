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
          <button onClick = {buttonClicked}  value = {"="}className = {ViewCss.item}> {'='} </button>
        </span>

        <span className = {ViewCss.output}>
          <span> {0}  </span>
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
  let currData =  resultNode.innerHTML ;
  let constants = {'π': Math.PI};

  let binaryOps = ['*', '+', '-', '%', '÷','y√x', 'e^x'];
  let UnaryOps = ['√', 'x^3', 'x^2', '1/x', '+/-', 'n!', '|x|', '2√', '3√', '2^x'];
  let booleanArray = [binaryOps.includes(op), UnaryOps.includes(op)];
  let temp, count;

  if (resultNode.innerHTML === 'NaN') {
    resultNode.innerHTML = 0;
  }

/* BINARY OPERATIONS */
  if (booleanArray[0]) {

    if (!(currData !== ')' || Number.isInteger(currData))) {return};

    if (binaryOps.includes(currData.slice(-1))) {
      resultNode.innerHTML =  resultNode.innerHTML.slice(0, resultNode.innerHTML.length - 1 ) + op;
      return;
    } else if (op === '*') { // mult

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

    } else if (op === 'e^x') {

      if ( !isBalanced(resultNode.innerHTML) ) return ;

      let array = resultNode.innerHTML.split(/(?<=\)|[+*÷-]\d)[+*÷-]/);
      let opArray = resultNode.innerHTML.match(/(?<=\)|[+*÷-]\d)[+*÷-]/g);
      let data = array[array.length - 1];
      let str = '';

      data = (data[0] === '(') ? data.slice(1, data.length - 1): data;
      array[array.length - 1] = `e^(${data})`;

      array.forEach( (ele, idx, collection) => {
        str += (idx < collection.length - 1 ) ? ele + opArray[idx] : ele;
      });

      resultNode.innerHTML = str;
    }

  }

/* UNARY OPERATIONS */
  if (booleanArray[1] && !booleanArray[0] ) {

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
      temp = parseInt(currData);

      for ( ; temp > 0; temp--) {
        result *= temp;
      }

      resultNode.innerHTML = result;

    } else if (op === '|x|') {

      resultNode.innerHTML = Math.abs(currData);

    }

  }

  /* NOT AN OPERATION */
  if (booleanArray.every((x) => x === false)) {

    if (constants['π'] || (parseFloat(op).constructor === Number) ) {

      let num = (constants[op]) || parseFloat(op);

      if (resultNode.innerHTML == 0)
        resultNode.innerHTML = '';

      if ( resultNode.innerHTML.slice(-1).match(/[0-9*+-]|^$/g)) {
        resultNode.innerHTML += num;
      }

    } else if (op === ')') { // CLOSE PARENTHESIS
      temp = eventNode.previousSibling;

      if (parseInt(currData.slice(-1)) >= 0 || (currData.slice(-1) == ')' && +(temp.dataset.count) ) ) {
        if (temp.dataset.count != 0) {
          temp.dataset.count = parseInt(temp.dataset.count) - 1;
          resultNode.innerHTML += ')';
        }
      }

    } else if (op === '(') { // OPEN PARENTHESIS

      temp = resultNode.innerHTML;

      if (currData == 0) {
        resultNode.innerHTML = '(';
      } else if ( binaryOps.includes(currData.slice(-1))) {
       resultNode.innerHTML += '(';
      }

      if (temp !== resultNode.innerHTML)
        eventNode.dataset.count = parseInt(eventNode.dataset.count) + 1;

    } else if (op === '.' ) {   // DECIMAL

      let str = resultNode.innerHTML;
      let array = str.split(/[*+-]/);

      if (str == 0 || array[array.length -1].indexOf('.') === - 1) {
        resultNode.innerHTML += '.';
      }


    } else if (op === '=') {  // EQUAL

      let str = resultNode.innerHTML;
      let array = str.split(/[*+-]/);
      let arrayOps = str.match(/[*+-]/g);

      console.log(array);
      console.log(arrayOps);

      array.forEach((x)=> {
        console.log(x);
      });

    }

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

  resultNode.innerHTML = parser(resultNode.innerHTML) || resultNode.innerHTML;
};


/*
  Function: parser
  Purpose: reduce operation, removing parenthesis if possible
*/
const parser = (str, a = null, b = null) => {
  let block;
  a = str.indexOf('(');
  b = str.indexOf(')');

  if (a !== -1) {
    block = [a, b];
    console.log(block)
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

