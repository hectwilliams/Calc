import React from 'react';
import axios from 'axios';
import AppCss from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionText: "",
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
    let obj = {optionText: event.currentTarget.innerText}
    this.setState(obj);
  }


  render() {
    return (
      <div>

{/* LEFT */}
        <div className = {AppCss.banner}>
          <span className = {AppCss.logo}>
            <label> MATH </label>
          </span>


{/* MIDDLE */}

          <span className = {AppCss.weird}></span>

          <span className = {AppCss.options}>
            <button onClick = {this.optionClick} > Mode </button>
            <button onClick = {this.optionClick} > Conversion</button>
          </span>

{/* RIGHT */}
          <span className = {AppCss.cacheView}></span>
        </div>

{/* LABEL */}
        <div id = {AppCss.optionSelect}>
          <label> {this.state.optionText} </label>
        </div>

{/* op Blocks */}
        {/* TODO ... ... .. . */}
      </div>
    )
  }
};