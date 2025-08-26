import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[850px] max-w-[calc(100%-24px)] rounded-full px-1 py-1 pr-6
        bg-white/10 supports-[backdrop-filter]:bg-white/12 backdrop-blur-xl backdrop-saturate-100 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
    >
      <nav className="w-full flex items-center justify-between text-white ">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src="/images/avatar.png" className="w-13 h-13 rounded-full" />
          </Link>

          <ul className="flex items-center gap-14 font-bebas-neue text-white text-[17px] font-bold tracking-wider">
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/project">PROJECTS</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/blog">BLOG</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="w-px h-5 bg-gray-300 mr-2"></div>
          <a
            href="https://github.com/jiwoothedev"
            target="_blank" // 새 탭에서 열기
          >
            <img src="/icons/github.svg" className="w-5 h-5" />
          </a>
          {/* TODO: Linkedin 계정 만들기 */}
          <img src="/icons/linkedin.svg" className="w-5 h-5" />
        </div>
      </nav>
    </header>
  );
}
