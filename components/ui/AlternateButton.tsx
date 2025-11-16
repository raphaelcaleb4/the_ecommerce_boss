'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface AlternateButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function AlternateButton({ children, onClick, className = '' }: AlternateButtonProps) {
    const alternateButtonRef = useRef<HTMLButtonElement>(null)
    const alternateCircleRef = useRef<HTMLDivElement>(null)
    const alternateTextRef = useRef<HTMLSpanElement>(null)
    const alternateIconWhiteRef = useRef<HTMLImageElement>(null)
    const alternateIconDarkRef = useRef<HTMLImageElement>(null)
    const alternateTimelineRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        if (!alternateButtonRef.current || !alternateCircleRef.current || !alternateTextRef.current || !alternateIconWhiteRef.current || !alternateIconDarkRef.current) return

        const alternateButton = alternateButtonRef.current
        const alternateCircle = alternateCircleRef.current
        const alternateText = alternateTextRef.current
        const alternateIconWhite = alternateIconWhiteRef.current
        const alternateIconDark = alternateIconDarkRef.current

        const handleAlternateMouseEnter = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (alternateTimelineRef.current) {
                alternateTimelineRef.current.kill()
            }

            const rect = alternateButton.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline
            const tl = gsap.timeline()
            alternateTimelineRef.current = tl

            // Position circle at hover point
            tl.set(alternateCircle, {
                left: x,
                top: y,
                scale: 0,
                opacity: 1,
                width: 200,
                height: 200,
            })

            // Animate circle growth
            tl.to(alternateCircle, {
                scale: 3,
                duration: 0.6,
                ease: 'power2.out',
            }, 0)

            // Animate text and icon color changes together
            tl.to(alternateText, {
                color: '#F2EBE5',
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(alternateIconWhite, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(alternateIconDark, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)
        }

        const handleAlternateMouseLeave = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (alternateTimelineRef.current) {
                alternateTimelineRef.current.kill()
            }

            const rect = alternateButton.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline for exit
            const tl = gsap.timeline()
            alternateTimelineRef.current = tl

            // Move circle to exit point and shrink
            tl.to(alternateCircle, {
                left: x,
                top: y,
                scale: 0,
                duration: 0.5,
                ease: 'power2.in',
            }, 0)

            // Reset text and icon colors together
            tl.to(alternateText, {
                color: '#262626',
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(alternateIconWhite, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(alternateIconDark, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)
        }

        alternateButton.addEventListener('mouseenter', handleAlternateMouseEnter)
        alternateButton.addEventListener('mouseleave', handleAlternateMouseLeave)

        return () => {
            alternateButton.removeEventListener('mouseenter', handleAlternateMouseEnter)
            alternateButton.removeEventListener('mouseleave', handleAlternateMouseLeave)
            if (alternateTimelineRef.current) {
                alternateTimelineRef.current.kill()
            }
        }
    }, [])

    return (
        <motion.button
            ref={alternateButtonRef}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border-2 border-teb-black bg-teb-silver px-8 py-4 font-[family-name:var(--font-family-orbitron)] text-sm font-bold shadow-[0_0_20px_rgba(242,235,229,0.6)] transition-shadow hover:shadow-[0_0_30px_rgba(191,191,189,0.8)] ${className}`}
        >
            {/* Growing circle overlay */}
            <div
                ref={alternateCircleRef}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-teb-black opacity-0"
            />

            {/* Icon - transitions between dark and white */}
            <div className="relative z-10 h-5 w-5">
                <Image
                    ref={alternateIconDarkRef}
                    src="/TEB LOGOMARK DARK.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5"
                />
                <Image
                    ref={alternateIconWhiteRef}
                    src="/TEB LOGOMARK WHITE.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5 opacity-0"
                />
            </div>

            {/* Text */}
            <span ref={alternateTextRef} className="relative z-10 text-teb-black">
        {children}
      </span>
        </motion.button>
    )
}