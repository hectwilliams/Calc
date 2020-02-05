import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './ConversionsTable.css';

export default class ConversionsTable extends Component {
  constructor(props) {
    super(props);
    this.modalBackgroundClick = this.modalBackgroundClick.bind(this);
  }

  modalBackgroundClick (event) {
    event.currentTarget.style.display = 'none';
    this.props.buttonNode.style.opacity = 1.0;
    console.log('hello ')
  }

  hoverModal (event) {
    event.currentTarget.parentNode.parentNode.style.pointerEvents = "none";
  }

  hoverExitModal (event) {
    event.currentTarget.parentNode.parentNode.style.pointerEvents = "all";
  }

  render () {
    return (
      <div onClick = {this.modalBackgroundClick} className = {this.props.modalClass}>
        <div onMouseOut = {this.hoverExitModal} onMouseOver = {this.hoverModal} className = {css.modalContent}>

          <form  >
            <input placeholder = {"Enter base value with unit (i.e 22 ms)"} type = "text"></input>
            {/* <span>


            </span> */}
            <input type = "text"></input>
          </form>

        </div>
      </div>
  )};


}

