"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1f2330] text-white">
      {/* soft background accent */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16 lg:px-10">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <div className="relative mx-auto w-64 sm:w-72 md:w-80">
            <Image
              src="/profile.jpg" // put your photo at /public/profile.jpg
              alt="Portrait of Tieng Kimlang"
              width={640}
              height={800}
              priority
              className="rounded-3xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
            />
            {/* tiny corner accent */}
            <span className="absolute -left-4 -bottom-4 h-12 w-12 rounded-xl bg-fuchsia-400/20 backdrop-blur" />
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-fuchsia-200/80">
            Introduction
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Tieng <span className="text-fuchsia-200">Kimlang</span>
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base/7 text-white/70 sm:text-lg/8">
            I bridge the gap between design and code. I specialize in UI/UX and Frontend Development
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="rounded-xl bg-fuchsia-300 px-5 py-2.5 font-medium text-[#1f2330] shadow hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/70"
            >
              Contact me
            </Link>
            <Link
              href="#work"
              className="rounded-xl border border-white/20 px-5 py-2.5 font-medium text-white hover:border-white/40"
            >
              My works
            </Link>
          </div>

          {/* social row (optional) */}
<div className="mt-6 flex items-center gap-6 text-2xl text-white/70">
  <a
    href="https://www.linkedin.com/in/kimlang-tieng-8925a02ab/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/kimlangstella"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <FaGithub />
  </a>

  <a
    href="https://t.me/Kimlang_tieng21"
    className="hover:text-white transition-colors"
  >
    <MdEmail />
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
}
