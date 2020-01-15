import React from 'react';
import axios from 'axios';
import AppCss from './App.css';
import ModeView from './ModeView';

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
      }
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

  optionClick (event) {
    this.setState({optionText: ''});
    this.setState({optionText: event.currentTarget.innerText});
  }


  render() {
    return (
      <div>

{/* TOP LEFT BANNER  */}
        <div className = {AppCss.banner}>
          <span className = {AppCss.logo}>
            <label> MATH </label>
          </span>


{/* MIDDLE BANNER  */}

          <span className = {AppCss.weird}></span>

          <span className = {AppCss.options}>

            <button onClick = {this.optionClick} >
              <label> Mode </label>
              {
                (this.state.optionText) ?
                  <div className  = {ModeView.selectMode}>
                    <div>  </div>
                    <div>  </div>
                    <div>  </div>
                  </div>
                : ''
              }
             </button>


            <button onClick = {this.optionClick} > Conversion</button>

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