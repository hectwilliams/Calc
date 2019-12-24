import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }

};

export default App;