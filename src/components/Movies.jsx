const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"; //tmdb사이트에 나와있음.

export default function Movie(props) { //import시 {}생략. import Movie from './components/Movies';이렇게.
    return (
        <div className="w-56 pb-8 flex-col inline-flex">
            <div className="h-80 rounded-tl-2xl rounded-tr-2xl border-l-2 border-r-2 border-t-2 border-neutral-200">
                <img
                    className="w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl"  //object-cover: 컨테이너의 가로/세로 중 더 짧은 쪽에 이미지를 맞추고 나머지는 잘라내어 빈 공간 없이 채움.
                    src={IMG_BASE_URL + props.poster_path}
                    alt={props.title}
                />
            </div>
            <div className="w-56 h-28 bg-white rounded-bl-2xl rounded-br-2xl outline outline-2 outline-offset-[-2px] outline-neutral-200 overflow-hidden">
                <div className="flex flex-col w-auto pt-[16px] px-[22px] gap-2 text-left">
                    <div className="text-black text-xl font-bold movie-title">{props.title}</div>
                    <div className="text-stone-500 text-base font-medium">평점: {props.vote_average}</div>
                </div>
            </div>
        </div>
    );
}