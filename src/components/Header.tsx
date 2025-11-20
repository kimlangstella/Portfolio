'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import clsx from 'clsx'

const NAV = [
  { label: 'Home', id: 'top' },
  { label: 'About Me', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('top')

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    if (latest > prev && latest > 80) setHidden(true)
    else setHidden(false)
  })

  useEffect(() => {
    const ids = NAV.map(n => n.id)
    const els = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? -88 : 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-0 z-50 bg-[#1f2330]/90 backdrop-blur border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-widest text-white border border-white px-3 py-1 rounded-md hover:bg-white/10 transition">
          TIENG KIMLANG
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={clsx(
                'text-sm font-medium text-white/70 hover:text-white transition',
                active === item.id && 'text-white font-semibold underline underline-offset-4'
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://t.me/Kimlang_tieng21"
            className="ml-4 rounded-md bg-fuchsia-300 px-4 py-2 text-sm font-semibold text-[#1f2330] hover:bg-fuchsia-200 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1f2330]/95 backdrop-blur border-t border-white/10"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {NAV.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      'block px-6 py-4 text-sm text-white/80 hover:text-white transition',
                      active === item.id && 'bg-white/5 text-white font-semibold'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/Kimlang_tieng21"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-center text-sm font-semibold text-[#1f2330] bg-fuchsia-300 hover:bg-fuchsia-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
