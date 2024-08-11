import {Component} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

class MovieItem extends Component {
  state = {play: false}

  videoPlayer = () => {
    this.setState({play: true})
  }

  closePlayer = () => {
    this.setState({play: false})
  }

  render() {
    const {play} = this.state
    const {mov} = this.props
    return (
      <div>
        <img src={mov.thumbnailUrl} alt="movie" onClick={this.videoPlayer} />

        <Popup
          open={play}
          closeOnDocumentClick
          onClose={this.closePlayer}
          modal
        >
          <div>
            <ReactPlayer url={mov.videoUrl} />
            <button onClick={this.closePlayer}>Close</button>
          </div>
        </Popup>
      </div>
    )
  }
}

export default MovieItem
