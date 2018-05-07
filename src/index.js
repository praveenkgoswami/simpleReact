import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyCvOlaAFwfRJH2huFqWpyaCTtTC96Y--pE';

class App extends Component {
  render() {
    return(
      <div>
        <h2 className="heading">Youtube Api</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
