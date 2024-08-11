import MovieSlider from '../MoviesSlider'

const PrimeVideo = ({moviesList}) => {
  console.log('h')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        color: 'white',
        padding: '0% 5%',
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MovieSlider movies={moviesList} />
    </div>
  )
}
export default PrimeVideo
