// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "인투더 | 웹·앱 개발 전문",
    template: "%s | 인투더",
  },
  description: "웹 개발·앱 개발·백엔드 구축·유지보수까지, 제품 수준의 외주 개발을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
