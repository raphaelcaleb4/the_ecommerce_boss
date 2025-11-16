'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import FloatingCard from './FloatingCard'
import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Hero() {
    const headingRef = useRef<HTMLDivElement>(null)

    // Stagger animation for heading
    useEffect(() => {
        if (!headingRef.current) return

        const words = headingRef.current.querySelectorAll('.word')
        gsap.from(words, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
        })
    }, [])

    const cards = [
        {
            imageSrc: '/images/naija-food-1.png',
            title: 'Naija Food Festival',
            initialX: 5,
            initialY: 20,
            delay: 0.2,
        },
        {
            imageSrc: '/images/naija-food-2.png',
            title: 'Naija Food Festival',
            initialX: 75,
            initialY: 15,
            delay: 0.4,
        },
        {
            imageSrc: '/images/komfort-place.png',
            title: 'Komfort Place Signature',
            initialX: 10,
            initialY: 65,
            delay: 0.6,
        },
        {
            imageSrc: '/images/olamide-live.png',
            title: 'Olamide Live In Toronto',
            initialX: 72,
            initialY: 60,
            delay: 0.8,
        },
    ]

    return (
        <section className="heroSection relative min-h-screen overflow-hidden bg-[--color-teb-cream]">
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Hero content */}
            <div className="heroContent relative flex min-h-screen items-center justify-center px-6 pt-24">
                {/* Main heading */}
                <div ref={headingRef} className="relative z-1 text-center">
                    <div className="overflow-hidden">
                        <h1 className="font-[family-name:var(--font-family-orbitron)] text-4xl font-bold leading-tight text-teb-black md:text-6xl lg:text-9xl">
                            <span className="word inline-block !text-teb-dark-camo">START.</span>{' '}
                            <span className="word inline-block text-teb-dark-camo">GROW.</span>
                            <br />
                            <span className="word inline-block">SELL OUT.</span>
                        </h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mx-auto mt-6 xl:mt-8 max-w-3xl text-base md:text-lg text-[--color-teb-dark-camo] xl:text-xl"
                    >
                        We help businesses and event brands sell smarter — from online
                        stores to live shows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className=" mt-8 xl:mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <SecondaryButton>
                            For Businesses
                        </SecondaryButton>
                        <MainButton>
                            For Events
                        </MainButton>
                    </motion.div>
                </div>

                {/* Floating cards */}
                {cards.map((card, index) => (
                    <FloatingCard key={index} {...card} />
                ))}

            </div>
        </section>
    )
}