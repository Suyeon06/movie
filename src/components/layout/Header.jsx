export default function Header() {
  return (
    <header className="bg-sky-950">
      <div className="h-[60px] flex items-center justify-between px-10">
        <nav className="flex items-center gap-6">
          <img
            src="/tmdbLogo.svg"
            alt="TMDB"
            className="h-6 w-auto"
          />
          <ul className="flex gap-4 text-white text-xl font-semibold">
            <li className="hover:text-sky-300"><a href="/">영화</a></li>
            <li className="hover:text-sky-300"><a href="/tv">TV프로그램</a></li>
          </ul>
        </nav>

        <form className="relative">
          <input
            type="search"
            placeholder="검색"
            className="w-80 h-10 bg-white rounded-3xl px-4 pr-10 text-sm focus:outline-none"
          />
          <button
            type="submit"
            aria-label="검색"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600"
          >
            <img src="/search.svg" className="w-5 h-5"/>
          </button>
        </form>
      </div>
    </header>
  )
}
