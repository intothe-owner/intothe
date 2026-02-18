"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Code2,
  Bot,
  Rocket,
  Boxes,
  TrendingUp,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* 타이틀 */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            SERVICES
          </h2>
          <p className="mt-4 text-white/60">
            아이디어를 현실로 만드는 기술 파트너
          </p>
        </div>

        {/* 서비스 카드 */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* 1 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur hover:border-white/20 transition">
            <LayoutDashboard className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">기획 · UI 설계</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              단순 제작이 아닌 비즈니스 구조를 먼저 설계합니다.
              사용자 흐름, 데이터 구조, 관리 시스템까지
              전체 아키텍처를 설계합니다.
            </p>
          </div>

          {/* 2 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur hover:border-white/20 transition">
            <Code2 className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">웹 · 앱 개발</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Next.js 기반 웹서비스와 Flutter 기반 앱을 제작합니다.
              SEO, 퍼포먼스, 확장성을 고려한 구조로 개발합니다.
            </p>
          </div>

          {/* 3 */}
          <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur hover:border-white/20 transition">
            <Bot className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">AI · 자동화</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              GPT 기반 상담 자동화, 체크리스트 분석,
              데이터 기반 예측 리포트 시스템을 구축합니다.
              업무 효율화를 목표로 설계합니다.
            </p>
          </div>

        </div>

        {/* 진행 방식 */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center mb-12">
            진행 방식
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div className="border border-white/10 p-6 rounded-xl hover:border-white/20 transition">
              <Rocket className="w-6 h-6 text-blue-500 mb-4" />
              <h4 className="font-semibold mb-2">MVP Sprint</h4>
              <p className="text-white/60">
                빠르게 검증이 필요한 초기 아이디어를
                최소 기능 제품으로 제작합니다.
              </p>
            </div>

            <div className="border border-white/10 p-6 rounded-xl hover:border-white/20 transition">
              <Boxes className="w-6 h-6 text-blue-500 mb-4" />
              <h4 className="font-semibold mb-2">Product Build</h4>
              <p className="text-white/60">
                실제 운영을 위한 완성형 서비스 제작.
                관리자 시스템 및 서버 인프라 포함.
              </p>
            </div>

            <div className="border border-white/10 p-6 rounded-xl hover:border-white/20 transition">
              <TrendingUp className="w-6 h-6 text-blue-500 mb-4" />
              <h4 className="font-semibold mb-2">Growth & Automation</h4>
              <p className="text-white/60">
                운영 중인 서비스에 AI 자동화와
                기능 고도화를 진행합니다.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            아이디어가 있으신가요?
          </h3>
          <p className="text-white/60 mb-8">
            실행은 제가 함께 하겠습니다.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            프로젝트 문의하기
          </Link>
        </div>

      </div>
    </section>
  );
}
