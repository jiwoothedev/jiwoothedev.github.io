import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <header className="header fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[850px] max-w-[calc(100%-24px)] px-1 py-1 pr-6">
      <nav className="w-full flex items-center justify-between text-white ">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src="/images/avatar.png" className="w-13 h-13 rounded-full" />
          </Link>

          <ul className="flex items-center gap-8 font-bebas-neue text-white text-[16px] mt-1 tracking-wide">
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/project">Projects</Link>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="w-px h-5 bg-white/15 mr-1"></div>
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
