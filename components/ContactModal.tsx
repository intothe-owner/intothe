"use client";

import { useEffect, useRef } from "react";
import { X, Send, Mail, Phone, MessageSquareText } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // ESC 닫기 + 열릴 때 포커스
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // 간단한 포커스 트랩
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    firstInputRef.current?.focus();

    // 스크롤 잠금
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ 지금은 데모: 추후 API 연동하면 여기에서 fetch로 보내면 됩니다.
    // const form = new FormData(e.currentTarget);
    // await fetch("/api/contact", { method: "POST", body: form });

    alert("문의가 접수되었습니다! (데모)\n실제 전송은 API 연동 후 가능합니다.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="문의하기"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        ref={panelRef}
        onClick={stop}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17]/90 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
      >
        {/* glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 p-7">
          <div>
            <p className="text-xs text-white/55">CONTACT</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              프로젝트 문의하기
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              아이디어만 있어도 괜찮습니다. 핵심 목표와 범위를 함께 정리해드릴게요.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/[0.04] p-2 text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            aria-label="닫기"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="relative px-7 pb-7">
          <div className="grid gap-4">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs text-white/60">이름</span>
                <input
                  ref={firstInputRef}
                  name="name"
                  required
                  className="h-11 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/60"
                  placeholder="성함"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs text-white/60">연락처</span>
                <input
                  name="phone"
                  className="h-11 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/60"
                  placeholder="010-0000-0000"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-xs text-white/60">이메일</span>
              <input
                name="email"
                type="email"
                required
                className="h-11 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/60"
                placeholder="name@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs text-white/60">문의 내용</span>
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue-500/60"
                placeholder="어떤 걸 만들고 싶으신지, 현재 상황(있다면), 원하는 일정/예산 범위 등을 적어주세요."
              />
            </label>

            <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                <Send size={16} />
                문의 접수
              </button>
            </div>

            <p className="mt-2 text-[11px] leading-relaxed text-white/45">
              제출하신 정보는 문의 응답 목적으로만 사용됩니다.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
