import Link from "next/link";

type Props = {
  onClickContactOpen: () => void;
};

const Header = ({ onClickContactOpen }: Props) => {
  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={scrollToId("top")}>
          <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
          <span className="text-sm font-semibold tracking-widest text-white/90">INTO THE</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a onClick={scrollToId("services")} href="#services" className="text-white/80 hover:text-white">
            서비스
          </a>
          <a onClick={scrollToId("why")} href="#why" className="text-white/60 transition-colors duration-200 hover:text-white">
            왜 인투더
          </a>
          <a onClick={scrollToId("process")} href="#process" className="text-white/60 transition-colors duration-200 hover:text-white">
            개발 프로세스
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a onClick={scrollToId("services")} href="#services"
             className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70 transition hover:bg-white/[0.08] hover:text-white">
            서비스 보기
          </a>

          <button
            onClick={onClickContactOpen}
            className="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            프로젝트 문의
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
