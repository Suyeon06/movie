import './App.css'
import {dummy} from './movieDummy';
import Movie from './components/Movies';

export default function App() {
  return (
    <div className="bg-red-200">
      {
      dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        )
      })}
    </div>
  )
}
