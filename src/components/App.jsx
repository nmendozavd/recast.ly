import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
// import exampleVideoData from '../data/exampleVideoData.js';
window.currentVideo;

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

  onMouseClick (event) {
    event.preventDefault();
    console.log(this.props.video);
    console.log(window.currentVideo);
    window.currentVideo = this.props.video;
    ReactDOM.render(<App />, document.getElementById('app'));
  }

  render() {
    console.log(this.props.videos[0]);
    console.log(this);
    window.currentVideo = this.props.videos[0];

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
            <div><h5><em>videoList</em><VideoList list={this.props}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));