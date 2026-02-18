"use client";

import { ShieldCheck, Layers3, Zap, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhySection() {
  const items = [
    {
      icon: <Layers3 className="h-5 w-5 text-blue-500" />,
      title: "설계부터 배포까지, 한 사람이 끝까지",
      desc: "중간 전달/누락 없이 기획·개발·배포·운영까지 같은 맥락으로 진행합니다.",
    },
    {
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      title: "빠른 실행력, 결정이 빨라집니다",
      desc: "회의는 줄이고 결과물로 이야기합니다. 작은 MVP부터 빠르게 검증합니다.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-500" />,
      title: "유지보수 가능한 코드와 구조",
      desc: "그때만 되는 코드가 아니라, 다음 기능 추가가 쉬운 구조로 만듭니다.",
    },
    {
      icon: <Wrench className="h-5 w-5 text-blue-500" />,
      title: "운영 관점의 자동화까지",
      desc: "AI 연동·업무 자동화·관리자 기능까지, 실제 운영 흐름을 기준으로 설계합니다.",
    },
  ];

  return (
    <section id="why" className="relative py-24">
      <div className="container">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
            WHY INTO THE
            <span className="h-1 w-1 rounded-full bg-white/40" />
            1인 스튜디오의 장점을 극대화
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            “같이 만들 사람”이 필요할 때,
            <br className="hidden md:block" />
            인투더가 옆에서 끝까지 달립니다.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
            소통을 강조하기보다, <span className="text-white/80">아이디어를 실행 가능한 구조</span>로 바꾸고
            <span className="text-white/80"> 결과물로 신뢰</span>를 쌓는 방식으로 함께합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/40 transition group-hover:border-white/20">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/90">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {it.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-white/60">
            “이거 가능할까?” 싶은 아이디어도 괜찮습니다. 먼저 구조부터 같이 잡아볼까요?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white"
            >
              서비스 자세히 보기 <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              프로젝트 문의하기 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* subtle background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>
    </section>
  );
}
