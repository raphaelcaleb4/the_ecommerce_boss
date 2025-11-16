'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface SecondaryButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function SecondaryButton({ children, onClick, className = '' }: SecondaryButtonProps) {
    const secondaryButtonRef = useRef<HTMLButtonElement>(null)
    const secondaryCircleRef = useRef<HTMLDivElement>(null)
    const secondaryTextRef = useRef<HTMLSpanElement>(null)
    const secondaryIconWhiteRef = useRef<HTMLImageElement>(null)
    const secondaryIconDarkRef = useRef<HTMLImageElement>(null)
    const secondaryTimelineRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        if (!secondaryButtonRef.current || !secondaryCircleRef.current || !secondaryTextRef.current || !secondaryIconWhiteRef.current || !secondaryIconDarkRef.current) return

        const secondaryButton = secondaryButtonRef.current
        const secondaryCircle = secondaryCircleRef.current
        const secondaryText = secondaryTextRef.current
        const secondaryIconWhite = secondaryIconWhiteRef.current
        const secondaryIconDark = secondaryIconDarkRef.current

        const handleSecondaryMouseEnter = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (secondaryTimelineRef.current) {
                secondaryTimelineRef.current.kill()
            }

            const rect = secondaryButton.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline
            const tl = gsap.timeline()
            secondaryTimelineRef.current = tl

            // Position circle at hover point
            tl.set(secondaryCircle, {
                left: x,
                top: y,
                scale: 0,
                opacity: 1,
                width: 200,
                height: 200,
            })

            // Animate circle growth
            tl.to(secondaryCircle, {
                scale: 3,
                duration: 0.6,
                ease: 'power2.out',
            }, 0)

            // Animate text and icon color changes together
            tl.to(secondaryText, {
                color: '#595957',
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(secondaryIconWhite, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)

            tl.to(secondaryIconDark, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            }, 0.2)
        }

        const handleSecondaryMouseLeave = (e: MouseEvent) => {
            // Kill any existing timeline to prevent conflicts
            if (secondaryTimelineRef.current) {
                secondaryTimelineRef.current.kill()
            }

            const rect = secondaryButton.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Create new timeline for exit
            const tl = gsap.timeline()
            secondaryTimelineRef.current = tl

            // Move circle to exit point and shrink
            tl.to(secondaryCircle, {
                left: x,
                top: y,
                scale: 0,
                duration: 0.5,
                ease: 'power2.in',
            }, 0)

            // Reset text and icon colors together
            tl.to(secondaryText, {
                color: '#FFFFFF',
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(secondaryIconWhite, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)

            tl.to(secondaryIconDark, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
            }, 0)
        }

        secondaryButton.addEventListener('mouseenter', handleSecondaryMouseEnter)
        secondaryButton.addEventListener('mouseleave', handleSecondaryMouseLeave)

        return () => {
            secondaryButton.removeEventListener('mouseenter', handleSecondaryMouseEnter)
            secondaryButton.removeEventListener('mouseleave', handleSecondaryMouseLeave)
            if (secondaryTimelineRef.current) {
                secondaryTimelineRef.current.kill()
            }
        }
    }, [])

    return (
        <motion.button
            ref={secondaryButtonRef}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border-2 border-teb-cream bg-teb-dark-camo px-8 py-4 font-[family-name:var(--font-family-orbitron)] text-sm font-bold shadow-[0_0_20px_rgba(242,235,229,0.6)] transition-shadow hover:shadow-[0_0_30px_rgba(89,89,87,0.8)] ${className}`}
        >
            {/* Growing circle overlay */}
            <div
                ref={secondaryCircleRef}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-teb-cream opacity-0"
            />

            {/* Icon - transitions between white and dark */}
            <div className="relative z-10 h-5 w-5">
                <Image
                    ref={secondaryIconWhiteRef}
                    src="/TEB LOGOMARK WHITE.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5"
                />
                <Image
                    ref={secondaryIconDarkRef}
                    src="/TEB LOGOMARK DARK.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute inset-0 h-5 w-5 opacity-0"
                />
            </div>

            {/* Text */}
            <span ref={secondaryTextRef} className="relative z-10 text-white">
        {children}
      </span>
        </motion.button>
    )
}