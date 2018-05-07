import React, { Component } from 'react';

class SearchBarEvent extends Component {
  render(){
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBarEvent;
