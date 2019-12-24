import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounted page');
  }

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }

}

export default App;