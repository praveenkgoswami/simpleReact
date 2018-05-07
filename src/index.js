import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search_bar';
import SearchBarEvent from './Components/search_bar_1';
import SearchBarConstructor from './Components/search_bar_constructor';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail'
const API_KEY = 'AIzaSyCvOlaAFwfRJH2huFqWpyaCTtTC96Y--pE';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  };
  this.videoSearch('Fortuner vs Endeavour');
console.log(1);
}

componentWillMount(){
  console.log(2);
}
componentDidMount(){
  console.log(4);
}
videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}
  render() {
    console.log(3);
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return(
      <div>
      <h2 className="heading">First React App</h2>
        <SearchBarConstructor onSearchTermChange={videoSearch} /><br />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
