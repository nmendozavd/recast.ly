// var App = () => (
// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div><h5><em>search</em> view goes here</h5></div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div><h5><em>videoPlayer</em> view goes here</h5></div>
//     </div>
//     <div className="col-md-5">
//       <div><h5><em>videoList</em> view goes here</h5></div>
//     </div>
//   </div>
// </div>
// );

import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
console.log(Array.isArray(exampleVideoData));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onVideoClick() {
    this.setState({
      done: true
    });
  }

  render() {
    // currently stuck here > binding?
    // Need to bind event handler to each video
    var currentVideo = exampleVideoData[0];

    for (var i = 0; i < exampleVideoData.length; i++) {
      console.log(exampleVideoData[i]);

      if (exampleVideoData[i].state) {
        currentVideo = exampleVideoData[i];
        break;
      }
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer vidplay={currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={exampleVideoData}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>

//   </div>
// );

// var VideoPlayer = () => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>Video Title</h3>
//       <div>Video Description</div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));