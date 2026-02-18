"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  className?: string;
  heightClassName?: string;
};

type HeroCopy = {
  lines: [string, string]; // ✅ 메인 2줄
  sub: string; // ✅ 서브 1줄
};

export default function MainVideoHero({
  className = "",
  heightClassName = "h-screen",
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = useMemo(
    () => ["/video/main01.mp4", "/video/main02.mp4", "/video/main03.mp4"],
    []
  );

  // ✅ 사업자/대표 공감형 문구 (슬라이드별)
  const copies: HeroCopy[] = useMemo(
    () => [
      {
        lines: ["아이디어는 있는데", "어디서부터 시작해야 할지 모르겠다면"],
        sub: "기획 정리 → MVP 개발 → 실제 운영까지 인투더가 함께합니다",
      },
      {
        lines: ["출시가 끝이 아니라 ", "운영까지 함께 가는 개발"],
        sub: "대표님의 비즈니스가 성장할 때까지 인투더가 함께합니다 ",
      },
      {
        lines: ["돈은 썼는데", "성과가 안 나서 불안하셨다면"],
        sub: "목표·지표부터 잡고, 출시 후 개선까지 결과로 이어지게 만듭니다",
      },
    ],
    []
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const stopAll = () => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.pause();
      try {
        v.currentTime = 0;
      } catch {}
    });
  };

  const playAt = async (index: number) => {
    const v = videoRefs.current[index];
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "true");
    v.setAttribute("webkit-playsinline", "true");

    try {
      await v.play();
    } catch {
      setTimeout(() => v.play().catch(() => {}), 150);
    }
  };

  const syncTo = (swiper: SwiperType) => {
    const i = swiper.realIndex ?? 0;
    setActiveIndex(i);
    stopAll();
    playAt(i);
  };

  useEffect(() => setMounted(true), []);

  // ✅ mounted 전: SSR mismatch 방지용 단일 영상 + 0번 문구
  if (!mounted) {
    const c = copies[0];
    return (
      <section
        className={`relative w-full overflow-hidden ${heightClassName} ${className}`}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videos[0]}
          muted
          playsInline
          preload="auto"
          autoPlay
          loop
        />

        {/* ✅ 중앙 문구 */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center font-semibold leading-snug tracking-tight text-white drop-shadow text-lg sm:text-4xl">
              <span className="block whitespace-nowrap">{c.lines[0]}</span>
              <span className="block whitespace-nowrap">{c.lines[1]}</span>
            </p>
            <p className="text-center text-xs sm:text-sm text-white/85 drop-shadow">
              {c.sub}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-black/25" />
      </section>
    );
  }

  const current = copies[activeIndex] ?? copies[0];

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClassName} ${className}`}
    >
      <Swiper
        allowTouchMove={false}
        simulateTouch={false}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => syncTo(swiper)}
        onSlideChangeTransitionStart={(swiper) => syncTo(swiper)}
        className="absolute inset-0 h-full"
      >
        {videos.map((src, idx) => (
          <SwiperSlide key={src}>
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              muted
              playsInline
              preload="auto"
              autoPlay
              loop
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ 중앙 문구: activeIndex에 따라 변경 */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center font-semibold leading-snug tracking-tight text-white drop-shadow text-lg sm:text-4xl">
            <span className="block whitespace-nowrap">{current.lines[0]}</span>
            <span className="block whitespace-nowrap">{current.lines[1]}</span>
          </p>

          <p className="text-center text-xs sm:text-sm text-white/85 drop-shadow">
            {current.sub}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/25" />
    </section>
  );
}
