'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

interface MainButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function MainButton({ children, onClick, className = '' }: MainButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const iconWhiteRef = useRef<HTMLImageElement>(null)
    const iconDarkRef = useRef<HTMLImageElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        if (!buttonRef.current || !circleRef.current || !textRef.current || !iconWhiteRef.current || !iconDarkRef.current) return

        const button = buttonRef.current
        const circle = circleRef.current
        const text = textRef.current
        const iconWhite = iconWhiteRef.current
        const iconDark = iconDarkRef.current

        const handleMouseEnter = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (timelineRef.current) {
                timelineRef.current.kill()
            }

            const rect = button.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline
            const tl = gsap.timeline()
            timelineRef.current = tl

            // Position circle at hover point
            tl.set(circle, {
                left: x,
                top: y,
                scale: 0,
                opacity: 1,
                width: 5000,
                height: 5000,
            })

            // Animate circle growth
            tl.to(circle, {
                scale: 3,
                duration: 0.6,
                ease: 'power2.out',
            }, 0)

            // Animate text and icon color changes together
            tl.to(text, {
                color: '#262626',
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(iconWhite, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(iconDark, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (timelineRef.current) {
                timelineRef.current.kill()
            }

            const rect = button.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline for exit
            const tl = gsap.timeline()
            timelineRef.current = tl

            // Move circle to exit point and shrink
            tl.to(circle, {
                left: x,
                top: y,
                scale: 0,
                duration: 0.5,
                ease: 'power2.in',
            }, 0)

            // Reset text and icon colors together
            tl.to(text, {
                color: '#FFFFFF',
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(iconWhite, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(iconDark, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)
        }

        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter)
            button.removeEventListener('mouseleave', handleMouseLeave)
            if (timelineRef.current) {
                timelineRef.current.kill()
            }
        }
    }, [])

    return (
        <motion.button
            ref={buttonRef}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border-2   border-teb-cream bg-teb-black px-8 py-4 font-[family-name:var(--font-family-orbitron)] text-sm font-bold shadow-[0_0_20px_rgba(242,235,229,0.6)] transition-shadow hover:shadow-[0_0_30px_rgba(38,38,38,0.8)] ${className}`}
        >
            {/* Growing circle overlay */}
            <div
                ref={circleRef}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-teb-cream opacity-0"
            />

            {/* Icon - transitions between white and dark */}
            <div className="relative z-10 h-5 w-5">
                <Image
                    ref={iconWhiteRef}
                    src="/TEB LOGOMARK WHITE.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5"
                />
                <Image
                    ref={iconDarkRef}
                    src="/TEB LOGOMARK DARK.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5 opacity-0"
                />
            </div>

            {/* Text */}
            <span ref={textRef} className="relative z-10 text-white">
        {children}
      </span>
        </motion.button>
    )
}