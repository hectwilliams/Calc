import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ViewCss from './ModeView.css'

const View = ({blocksCount}) => {
  const [buttonSelect, buttonFunc]= useState("");
  const [commBuffer, commFunc]= useState(0);
  const [binaryOp, binaryOpFunc] = useState('');

  return (
    <div className = {ViewCss.container}>
        {/* Black BAR */}

      <div className = {ViewCss.itemBar_}> </div>

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
          <button onClick = {buttonClicked} value = {9} className = {ViewCss.item}> {'9'} </button>
          <button onClick = {buttonClicked} value = {8} className = {ViewCss.item}> {'8'} </button>
          <button onClick = {buttonClicked} value = {7} className = {ViewCss.item}> {'7'} </button>
          <button onClick = {buttonClicked} value = {"*"}className = {ViewCss.item}> {'x'} </button>

          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {4} className = {ViewCss.item}> {'4'} </button>
          <button onClick = {buttonClicked} value = {5} className = {ViewCss.item}> {'5'} </button>
          <button onClick = {buttonClicked} value = {6} className = {ViewCss.item}> {'6'} </button>
          <button onClick = {buttonClicked} value = {"-"}className = {ViewCss.item}> {'-'} </button>

          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked} value = {1} className = {ViewCss.item}> {'1'} </button>
          <button onClick = {buttonClicked} value = {2} className = {ViewCss.item}> {'2'} </button>
          <button onClick = {buttonClicked} value = {3} className = {ViewCss.item}> {'3'} </button>
          <button onClick = {buttonClicked} value = {"+"}className = {ViewCss.item}> {'+'} </button>

          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button className = {ViewCss.item}> </button>
          <button onClick = {buttonClicked}  value = {"+/-"} className = {ViewCss.item}> {'+/-'} </button>
          <button onClick = {buttonClicked}  value = {0} className = {ViewCss.item}> {'0'} </button>
          <button onClick = {buttonClicked}  value = {'.'} className = {ViewCss.item}> {'.'} </button>
          <button onClick = {buttonClicked}  value = {"="}className = {ViewCss.item}> {'='} </button>
        </span>


        {/* communication device (OUTPUT) */}

        <span className = {ViewCss.output}>
          <div> {0}  </div>
          <div> {''}  </div>
        </span>

      </div>

        {/* Black BAR */}
      <div className = {ViewCss.itemBar_}> </div>

    </div>
  )
}
export default View;



const buttonClicked = (event) => {
  let parentNode = event.currentTarget.parentNode;
  let resultWindow = event.currentTarget.parentNode.nextSibling.childNodes[0] ;
  let binaryOp = event.currentTarget.parentNode.nextSibling.childNodes[1];

  let op = event.currentTarget.value;
  let data = parseFloat(op) ;
  let currData =  resultWindow.innerHTML ;
  let temp;



  if (op === '+/-') {  // toggle[+,-] integer value

    resultWindow.innerHTML = parseFloat(resultWindow.innerHTML) * -1;

  } else if (op === '.' ) {   // decimal point
    let str = resultWindow.innerHTML;
    let array = str.split(/[*+-]/);

    if (str ==0 || array[array.length -1].indexOf('.') === - 1) {
      resultWindow.innerHTML += '.';
    }

  } else if (data.constructor === Number && data.toString() !== 'NaN') {

    temp = parseFloat(resultWindow.innerHTML) == 0 ? data : resultWindow.innerHTML + data;
    resultWindow.innerHTML = temp;

  } else if (op === '*') { // mult
    binaryOp.innerHTML = 'mult';
    resultWindow.innerHTML += ' * ';
  } else if (op === '+') {
    binaryOp.innerHTML = 'add';
    resultWindow.innerHTML += ' + ';
  } else if (op === '-') {
    binaryOp.innerHTML = 'subtract';
    resultWindow.innerHTML += ' - ';
  } else if (op === '=') {
    console.log(resultWindow.innerHTML);
  }

};
