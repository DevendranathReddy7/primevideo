// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieSlider = ({movies}) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h1>Action Movies</h1>

      <Slider {...settings}>
        {movies
          .filter(mov => mov.categoryId === 'ACTION')
          .map(movie => (
            <li key={movie.id}>
              <MovieItem mov={movie} />
            </li>
          ))}
      </Slider>

      <h1>Comedy Movies</h1>

      <Slider {...settings}>
        {movies
          .filter(mov => mov.categoryId === 'COMEDY')
          .map(movie => (
            <li key={movie.id}>
              <MovieItem mov={movie} />
            </li>
          ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
