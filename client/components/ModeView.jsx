import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ViewCss from './ModeView.css'

const View = ({blocksCount}) => {
  const [buttonSelect, buttonFunc]= useState("");
  const [commBuffer, commFunc]= useState(0);
  const [binaryOp, binaryOpFunc] = useState('');

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
          <button onClick = {buttonClicked} value = {'CE'} className = {ViewCss.item}> {'CE'} </button>
          <button onClick = {buttonClicked} value = {'C'} className = {ViewCss.item}> {'C'} </button>
          <button onClick = {buttonClicked} value = {'del'} className = {ViewCss.item}> {'del'} </button>

          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'x^2'} className = {ViewCss.item}> {'x^2'} </button>
          <button onClick = {buttonClicked} value = {'π'} className = {ViewCss.item}> {'π'} </button>
          <button onClick = {buttonClicked} value = {'('} className = {ViewCss.item}> {'('} </button>
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
          <button onClick = {buttonClicked} className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {'2^x'} className = {ViewCss.item}> {'2^x'} </button>
          <button onClick = {buttonClicked} value = {'3√'} className = {ViewCss.item}> {'3√'} </button>
          <button onClick = {buttonClicked} value = {'2√'} className = {ViewCss.item}> {'2√'} </button>
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
          <div> {0}  </div>
          <div> {''}  </div>
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
  let resultWindow = parentNode.nextSibling.childNodes[0] ;
  let binaryOp = parentNode.nextSibling.childNodes[1];

  let op = event.currentTarget.value;
  let data = parseFloat(op) ;
  let currData =  resultWindow.innerHTML ;
  let temp, count;
  let binaryOps = ['*', '+', '-', '%', '÷','y√x'];
  let UnaryOps = ['√', 'x^3', 'x^2', '1/x', '+/-', 'n!', '|x|', '2√', '3√', '2^x'];
  let booleanArray = [binaryOps.includes(op), UnaryOps.includes(op)];


/* 
  BINARY OPERATIONS
*/

  if (booleanArray[0]) { 
    
    if (binaryOps.includes(currData.slice(-1))) {
      resultWindow.innerHTML =  resultWindow.innerHTML.slice(0, resultWindow.innerHTML.length - 1 ) + op;
      return;
    } else if (op === '*') { // mult

      binaryOp.innerHTML = resultWindow.innerHTML;
      resultWindow.innerHTML += '*';

    } else if (op === '+') {

      binaryOp.innerHTML = resultWindow.innerHTML;
      resultWindow.innerHTML += '+';

    } else if (op === '-') {

      binaryOp.innerHTML = resultWindow.innerHTML;
      resultWindow.innerHTML += '-';

    } else if (op === '÷') {
    
      binaryOp.innerHTML = resultWindow.innerHTML;
      resultWindow.innerHTML += '÷';
   
    } else if (op === '%') {
    
      binaryOp.innerHTML = resultWindow.innerHTML;
      resultWindow.innerHTML += '÷';

    } else if (op === 'y√x') {
      console.log('jsj')
      binaryOp.innerHTML = resultWindow.innerHTML;

    }

  }

/*
  UNARY OPERATIONS
*/
  if (booleanArray[1]) {    

    if (op === '2^x') {

      resultWindow.innerHTML = 2**parseFloat(resultWindow.innerHTML);

    } else if (op === '2√') {

      resultWindow.innerHTML = parseFloat(resultWindow.innerHTML)**(1/2) ;
  
    } else if (op === '3√') {

      resultWindow.innerHTML = parseFloat(resultWindow.innerHTML)**(1/3) ;
  
    } else if (op === 'x^3') {

      resultWindow.innerHTML = parseFloat(resultWindow.innerHTML)**3;

    } else if (op == 'x^2') {

      resultWindow.innerHTML = parseFloat(resultWindow.innerHTML)**2;

    } else if (op === '1/x') {

      resultWindow.innerHTML = 1 / parseFloat(resultWindow.innerHTML);

    } else if (op === '+/-') {  // toggle[+,-] integer value

      resultWindow.innerHTML = parseFloat(resultWindow.innerHTML) * -1;

    } else if (op === 'n!') {
      
      let result = 1;
      temp = parseInt(currData);
      
      for ( ; temp > 0; temp--) {
        result *= temp;
      }
      
      resultWindow.innerHTML = result;
 
    } else if (op === '|x|') {

      resultWindow.innerHTML = Math.abs(currData);
    
    }
  
  }

  /* NOT AN OPERATION */
  if (booleanArray.every((x) => x === false)) {

    if (op === 'π') {

        temp = resultWindow.innerHTML.slice(-1); 

        if (resultWindow.innerHTML == 0) {
          resultWindow.innerHTML = Math.PI;
        }

        if (binaryOps.includes(temp) || temp === '(' ) {
            resultWindow.innerHTML += Math.PI;
        }

      } else if (op === ')') { //PARENTHESIS

        if (eventNode.previousSibling.style.color) {
          if (parseInt(currData.slice(-1)) >=0 ) {
            resultWindow.innerHTML += ')';
            eventNode.previousSibling.style.color = '';
          }
        }

      } else if (op === '(') { //PARENTHESIS
        
        if (currData == 0) {
          resultWindow.innerHTML = '(';
        }  else if (binaryOps.includes (currData.split(' ').join('').slice(-1)) )  { //  tail char is op symbol
          resultWindow.innerHTML += '(';
        }

        if (resultWindow.innerHTML.indexOf('(') !== -1) {
          eventNode.style.color = 'silver';
        }

      } else if  (op === 'C') { // CLEAR

        resultWindow.innerHTML = 0;

      } else if (op === 'del') {

        count = resultWindow.innerHTML.length - 1;

        while (resultWindow.innerHTML[count] == ' ')
          --count;

        resultWindow.innerHTML = resultWindow.innerHTML.slice(0, count);

        if (resultWindow.innerHTML === '') {
          resultWindow.innerHTML = 0;
        }
      
      } else if (op === '.' ) {   // DECIMAL

        let str = resultWindow.innerHTML;
        let array = str.split(/[*+-]/);

        if (str == 0 || array[array.length -1].indexOf('.') === - 1) {
          resultWindow.innerHTML += '.';
        }

      } else if (data.constructor === Number && data.toString() !== 'NaN') {

        temp = parseFloat(resultWindow.innerHTML) == 0 ? data : resultWindow.innerHTML + data;
        resultWindow.innerHTML = temp;
      
      } else if (op === '=') {  // EQUAL

        let str = resultWindow.innerHTML;
        let array = str.split(/[*+-]/);
        let arrayOps = str.match(/[*+-]/g);

        console.log(array);
        console.log(arrayOps);

        array.forEach((x)=> {
          console.log(x);    
        });
      } 
  }

};