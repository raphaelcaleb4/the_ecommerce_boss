'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="fixed top-3 md:top-6 left-0 right-0 z-50 px-3 md:px-6">
            <div className="mx-auto flex max-w-[100%] items-center justify-between rounded-full !bg-teb-dark-grey/60 px-6 py-4 backdrop-blur-lg">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/TEB LOGO WHITE.svg"
                        alt="The E-Commerce Boss"
                        width={100}
                        height={80}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden gap-8 md:flex">
                    <a href="#about" className="font-family-manrope font-semibold text-teb-silver transition-colors hover:text-white">
                    About
                    </a>

                    <a href="#services" className="font-family-manrope font-semibold text-teb-silver transition-colors hover:text-white">
                    Services
                    </a>

                    <a href="#contact" className="font-family-manrope font-semibold text-teb-silver transition-colors hover:text-white">
                        Contact
                    </a>
                </div>

                {/* CTA Button */}
                {/*<button className="hidden rounded-full bg-[--color-teb-cream] px-6 py-3 font-[family-name:var(--font-family-orbitron)] text-sm font-bold text-[--color-teb-black] transition-all hover:scale-105 hover:shadow-lg md:block">
                    🛒 Try Ad Boss IQ
                </button>*/}
                <SecondaryButton className="hidden md:flex">
                    Try Ad Boss IQ
                </SecondaryButton>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="navBtn flex flex-col gap-1.5 md:hidden bg-transparent"
                    aria-label="Toggle menu"
                >
                      <span
                          className={`h-0.5 w-6 bg-white transition-all ${
                              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                          }`}
                      />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all ${
                            isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all ${
                            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border bg-teb-dark-grey/95 border-[--color-teb-grey]/20 text-white !rounded-4xl !mt-[0.5rem] md:hidden">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        <a href="#about" className="font-[family-name:var(--font-family-manrope)] text-[--color-teb-silver] transition-colors hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </a>
                        <a href="#services" className="font-[family-name:var(--font-family-manrope)] text-[--color-teb-silver] transition-colors hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </a>
                        <a href="#contact" className="font-[family-name:var(--font-family-manrope)] text-[--color-teb-silver] transition-colors hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </a>
                <SecondaryButton className="text-sm !w-fit">
                    Try Ad Boss IQ
                </SecondaryButton>
            </div>
            </motion.div>
            )}
</motion.nav>
)
}