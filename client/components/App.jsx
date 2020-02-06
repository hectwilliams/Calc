import React from 'react';
import axios from 'axios';
import AppCss from './App.css';
import ModeView from './ModeView';
import ConversionsTable from './ConversionsTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionText: "",
      opView: null,
      blocks: {
        basic : 19,
        science: 49,
        programmer: 39
      },
      buttonNode: null
    };
    this.optionClick = this.optionClick.bind(this);
  }

  componentDidMount() {
    axios.get('/hello')
    .then((resp)=>{
      console.log(resp);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

 // converison button clicked
  optionClick (event) {
    let modalNode = document.getElementsByClassName(AppCss.modal)[0];
    let node = event.currentTarget;

    if (modalNode.style.display !== 'block') {
      modalNode.style.display = 'block';
      document.querySelector("#modalContent").style.display = "block";
    }

  }

  render() {
    return (
      <div>
        {/* MODAL  */}

          <ConversionsTable
            modalClass = {AppCss.modal}
          />


{/* TOP LEFT BANNER  */}
        <div className = {AppCss.banner}>
          <span className = {AppCss.logo}>
            <label> MATH </label>
          </span>


{/* MIDDLE BANNER  */}

          <span className = {AppCss.weird}></span>

          <span className = {AppCss.options}>

          <button onClick = {this.optionClick} > Conversions </button>

          </span>

{/*  TOP RIGHT BANNER  */}
          <span className = {AppCss.cacheView}></span>
        </div>

{/* LABEL */}
        <div id = {AppCss.optionSelect}>
          <label> {this.state.optionText} </label>
        </div>

{/* op Blocks */}
        {/* TODO ... ... .. . */}
      <ModeView blocksCount = {this.state.blocks.basic} />

      </div>
    )
  }
};