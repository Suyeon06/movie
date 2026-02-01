import { createFileRoute } from '@tanstack/react-router'
import { dummy } from '../movieDummy'
import Movie from '../components/Movies'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-red-200">
      {dummy.results.map((item) => (
        <Movie
          key={item.id || item.title}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  )
}
