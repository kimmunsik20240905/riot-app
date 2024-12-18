"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 글로벌 레이아웃 */}
        <div className="min-h-screen flex flex-col">
          {/* 네비게이션 메뉴 */}
          <header className="bg-gray-700 text-white p-4">
            <nav className="container mx-auto flex  justify-evenly">
              <Link href="/" className="text-white">
                홈
              </Link>
              <Link href="/champions" className="text-white">
                챔피언 목록
              </Link>
              <Link href="/items" className="text-white">
                아이템 목록
              </Link>
              <Link href="/rotation" className="text-white">
                챔피언 로테이션
              </Link>
            </nav>
          </header>

          {/* 콘텐츠 영역 */}
          <main className="flex-1 p-6">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
