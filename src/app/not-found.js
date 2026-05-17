"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center relative" id="main-content">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        </div>

        <Container className="relative z-10 text-center py-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 shadow-lg mb-8">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
              404
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => typeof window !== "undefined" && window.history.back()}
              className="group flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
