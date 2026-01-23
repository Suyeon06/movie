const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"; //tmdb사이트에 나와있음.

export default function Movie(props) { //import시 {}생략. import Movie from './components/Movies';이렇게.
    return (
        <div className="p-4 m-4 bg-white rounded-lg shadow-md">
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <div className='movie info'>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    );
}