export default function Header() {
    return (
        <div className="w-screen h-[60px] flex bg-sky-950 justify-between items-center">
            <div className="left-[60px] flex items-center gap-4">
                <img
                    className="h-full object-cover"
                    src="/tmdbLogo.svg"
                />
                <div className="text-white text-xl font-semibold leading-6">영화</div>
                <div className="text-white text-xl font-semibold leading-6">TV 프로그램</div>
            </div>
        </div>
    )
}