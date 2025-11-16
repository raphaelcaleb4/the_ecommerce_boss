'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface FloatingCardProps {
    imageSrc: string
    title: string
    initialX: number
    initialY: number
    delay: number
}

export default function FloatingCard({
                                         imageSrc,
                                         title,
                                         initialX,
                                         initialY,
                                         delay,
                                     }: FloatingCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

    useEffect(() => {
        if (!cardRef.current) return

        const card = cardRef.current

        // Set initial dimensions explicitly
        gsap.set(card, {
            width: 280,
            height: 280,
        })
        let mm = gsap.matchMedia();

        mm.add("(max-width: 1440px)", () => {
            gsap.set(card, { scale: 0.8 });
        });

        mm.add("(max-width: 768px)", () => {
            gsap.set(card, { scale: 0.6 });
        });

        mm.add("(max-width: 480px)", () => {
            gsap.set(card, { scale: 0.4 });
        });

        return () => mm.revert();

        const scrollTrigger = ScrollTrigger.create({
            trigger: card,
            start: 'top 20%',
            end: 'top 10%',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress
                gsap.to(card, {
                    /*scale: 1 - progress * 0.6,*/
                    /*width: progress > 0.5 ? 180 : 280,
                    height: progress > 0.5 ? 60 : 280,*/
                    duration: 0.4,
                    opacity: 0.3,
                })
            },
        })

        return () => {
            scrollTrigger.kill()
        }
    }, [])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)

        console.log(rect, width, height, mouseX, mouseY, xPct, yPct, x, y);
        console.log("rect, width, height, mouseX, mouseY, xPct, yPct, x, y");
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease: 'easeOut' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                position: 'absolute',
                left: `${initialX}%`,
                top: `${initialY}%`,
            }}
            className="floatCont group relative cursor-pointer overflow-hidden rounded-2xl bg-teb-dark-grey shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-10"
        >
            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={isHovered ? { x: ['-100%', '200%'] } : { x: '-100%' }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 0.5,
                }}
            />

            {/* Image */}
            <div className="relative h-full w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
            </div>

            {/* Text overlay */}
            <div className="floatTextBox absolute bottom-0 left-0 right-0 mx-4 my-2 overflow-hidden rounded-xl bg-teb-card-green/70 p-6">
                <p className="font-[family-name:var(--font-family-manrope)] text-sm font-bold text-white">
                    {title}
                </p>
            </div>
        </motion.div>
    )
}