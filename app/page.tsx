"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainVideoHero from "@/components/MainVideoHero";
import { steps } from "@/util/variable";
import { motion, Variants } from "framer-motion";
import { Palette, Code2, Cpu, Rocket, Target, ShieldCheck, Wrench, ArrowRight, ArrowDown } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import Image from "next/image";
export default function HomePage() {

  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };
  const onClickContactOpen = () => {
    setContactOpen(true);
  }

  const hoverCard =
    "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur " +
    "transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] " +
    "hover:bg-white/[0.06]";
  return (
    <main className="min-h-screen bg-grid bg-[#0b0f17] text-white">

      <div id="top" />
      <Header onClickContactOpen={onClickContactOpen} />

      <MainVideoHero heightClassName="h-screen" />

      {/* 여기서부터 */}


      <section className="relative">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-[380px] right-[-140px] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* 1) BIG COPY */}
        <section className="container relative py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full text-center  mt-10"
          >
            <h2 className="w-full mt-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              제품처럼 완성도 있게,
              <br />
              <span className="text-blue-500">웹·앱을 외주로</span> 개발합니다.
            </h2>

            <p className="mt-6 w-full text-base leading-relaxed text-white/65 md:text-2xl">
              <span className="font-bold text-white">기능 구현</span>만이 아니라
              <span className="font-bold text-white">운영/확장</span>까지 고려한 구조로 만들고,<br />
              출시 이후 개선까지 이어지도록 함께합니다.
            </p>
            <div className="mt-12 w-full text-black">
              <button
                type="button"
                onClick={openContact}
                className="block w-full rounded-2xl bg-white px-6 py-5 text-center text-lg font-semibold text-black hover:opacity-90"
              >
                프로젝트 문의하기
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2) SERVICES (심플 3카드) */}
        <section id="services" className="relative border-t border-white/10 bg-white/[0.02] mt-20">
          <div className="container py-16 md:py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="max-w-3xl"
            >

              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl mt-10">
                우리가 해드리는 일
              </h3>
              <p className="mt-5 text-white/60 md:text-lg leading-relaxed">
                “만들어드릴게요”에서 끝나지 않습니다. 목표를 정리하고, 빠르게 출시하고,
                운영하면서 더 좋아지게 만드는 것까지 포함합니다.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-14 grid gap-6 md:grid-cols-3 mb-10"
            >
              {[
                {
                  icon: Palette,
                  title: "기획·UI 설계",
                  desc:
                    "아이디어를 화면과 흐름으로 정리합니다. 사용자가 헷갈리지 않도록, 핵심만 남기고 구조를 잡습니다.",
                  tags: ["요구사항 정리", "와이어프레임", "UI 가이드"],
                },
                {
                  icon: Code2,
                  title: "웹·앱 제작",
                  desc:
                    "필요한 기능을 우선순위로 쪼개서 빠르게 만듭니다. MVP부터 정식 서비스까지 단계적으로 확장합니다.",
                  tags: ["WEB / APP", "관리자", "결제·로그인"],
                },
                {
                  icon: Cpu,
                  title: "운영·자동화",
                  desc:
                    "출시 이후가 더 중요합니다. 유지보수, 성능 개선, 업무 자동화까지 운영을 편하게 만드는 기능을 붙입니다.",
                  tags: ["유지보수", "성능 최적화", "AI/자동화"],
                },
              ].map((s) => {
                const Icon = s.icon;

                return (
                  <motion.div
                    key={s.title}
                    variants={fadeUp}
                    className={`${hoverCard} p-8 group`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-2xl font-bold tracking-tight">{s.title}</h4>

                      {/* ✅ lucide 아이콘 배지 */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.14]">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-white/60">
                      {s.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 3) TECH (짧게, 큰 글자) */}
        <section id="why" className="relative border-t border-white/10">
          <div className="container py-16 md:py-20 ">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="max-w-3xl"
            >

              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl mt-10">
                왜 인투더인가
              </h3>
              <p className="mt-5 text-white/60 md:text-lg leading-relaxed">
                “개발만”이 아니라, <span className="text-white/85 font-semibold">출시와 운영</span>까지
                생각하는 외주 파트너를 찾는다면 인투더가 맞습니다.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 grid gap-4 md:grid-cols-4 mb-10"
            >
              {[
                {
                  icon: Rocket,
                  title: "빠른 첫 결과",
                  desc: "완벽을 기다리기보다 핵심부터 출시합니다. 빠르게 확인하고 개선하는 방식으로 갑니다.",
                  chips: ["MVP 우선", "단계적 확장"],
                },
                {
                  icon: Target,
                  title: "목표 중심 진행",
                  desc: "기능 나열이 아니라 목표와 우선순위로 정리합니다. 불필요한 개발 비용을 줄입니다.",
                  chips: ["범위 명확화", "우선순위"],
                },
                {
                  icon: ShieldCheck,
                  title: "운영 가능한 구조",
                  desc: "나중에 고치기 어렵지 않게 설계합니다. 성능·보안·확장성을 기본으로 잡습니다.",
                  chips: ["확장성", "품질 관리"],
                },
                {
                  icon: Wrench,
                  title: "유지보수까지",
                  desc: "오픈 후가 시작입니다. 버그 대응, 개선, 기능 추가까지 운영 흐름을 이어갑니다.",
                  chips: ["운영 지원", "지속 개선"],
                },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    variants={fadeUp}
                    className={`${hoverCard} p-7 group`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.06)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.14]">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/55">
                        INTO THE
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-semibold tracking-tight">
                      {b.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {b.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {b.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* 아래 한 줄 CTA (toktokhan 느낌) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-white/70">
                  “지금 필요한 기능”부터 잡고, <span className="text-white font-semibold">빠르게 결과</span>로 보여드릴게요.
                </p>
                <button
                  type="button"
                  onClick={openContact}
                  className="btn btn-primary w-full md:w-auto"
                >
                  프로젝트 문의하기
                </button>
                {/* <a className="btn btn-primary w-full md:w-auto" href="#contact">
                  프로젝트 문의
                </a> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4) PROCESS (간단 3~4 스텝) */}
        <section id="process" className="relative border-t border-white/10 bg-white/[0.02] mt-20 p-10">
          <div className="container py-16 md:py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
                개발 프로세스
              </h3>
              <p className="mt-4 text-white/60 md:text-lg">
                불확실성을 줄이기 위해 단계별로 범위를 확정하며 진행합니다.
              </p>
            </motion.div>

            {/* ✅ PC: 가로 흐름 / 모바일: 세로 흐름 */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              {steps.map((s, index) => (
                <div key={s.no} className="flex flex-col md:flex-row md:items-center">
                  {/* 카드 */}
                  <motion.div
                    variants={fadeUp}
                    className={`${hoverCard} p-6 w-full md:w-54`}
                  >
                    <div className="text-xs text-white/50">{s.no}</div>
                    <div className="mt-2 text-lg font-semibold">{s.t}</div>
                    <div className="mt-2 text-sm text-white/60">{s.d}</div>
                  </motion.div>

                  {/* 화살표 (마지막 제외) */}
                  {index !== steps.length - 1 && (
                    <>
                      {/* PC 화살표 */}
                      <div className="hidden md:flex items-center text-white/40 ml-3">
                        <ArrowRight size={28} strokeWidth={1.5} />
                      </div>

                      {/* 모바일 화살표 */}
                      <div className="flex md:hidden justify-center py-4 text-white/40">
                        <ArrowDown size={28} strokeWidth={1.5} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5) PROJECTS (이미지 자리 + hover 모션) */}
        <section className="relative border-t border-white/10 mt-10">
          <div className="container py-16 md:py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-end justify-between gap-4"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl mt-10">
                  프로젝트
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10 grid gap-4 md:grid-cols-3 mb-10"
            >
              {[
                {
                  title: "SY컨설팅",
                  desc: "웹 서비스 구축",
                  src: "/images/portfolio1.png",
                  tags: ["Web"],
                },
                {
                  title: "한국클린쿱",
                  desc: "웹 서비스 구축",
                  src: "/images/portfolio2.png",
                  tags: ["Web"],
                },
              ].map((p) => (
                <motion.article
                  key={p.title}
                  variants={fadeUp}
                  className={hoverCard + " overflow-hidden group"}
                >
                  {/* ✅ 실제 이미지 */}
                  <div className="relative aspect-video bg-white/[0.03] overflow-hidden">
                    {p.src ? (
                      <>
                        <Image
                          src={p.src}
                          alt={p.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          priority={false}
                        />
                        {/* 살짝 어둡게 + 그라데이션(텍스트 가독성) */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 grid place-items-center text-xs text-white/40">
                        NO IMAGE
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className="text-base font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6) CONTACT CTA */}

      </section>

      {/* 여기까지 메인 */}
      <ContactModal open={contactOpen} onClose={closeContact} />
      {/* Footer */}
      <Footer />
    </main>
  );
}
