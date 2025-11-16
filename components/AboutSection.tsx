'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import FloatingCard from './FloatingCard'
import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Image from "next/image";
import Hairline from "@/components/ui/Hairline";

export default function AboutSection() {


    return (
        <section className="aboutSection mt-32 relative flex justify-center bg-white py-20 px-[5%]">
            {/* About content */}
            <div className="relative grid lg:grid-cols-2 items-center gap-8 max-w-[1440px] max-h-[1080px] min-h-[80vh]">
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden !rounded-4xl !max-h-[70vh]">
                    <Image className="relative h-full w-full object-cover" src="/images/about-team.jpg" alt="About Us" width={516} height={640} />
                </div>
                {/* Main heading */}
                <div className="flex flex-col relative gap-6">
                    <div className="flex flex-col justify-start relative overflow-hidden">


                        {/* HAIRLINE */}
                        <Hairline>About</Hairline>


                        <h2 className="headingTwo">
                            <span className="!text-teb-dark-camo">BUILT FOR THE</span>
                            <br />
                            <span className="inline-block">DIGITAL HUSTLE</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-[--color-teb-dark-camo]/80 text-base md:text-lg lg:text-2xl"
                    >
                        The Ecommerce Boss is a results-driven digital agency helping brands grow through smart websites, ads, and automation.
                        <br />
                        Now, with Sold Out by Ecommerce Boss and Ad Boss IQ, we deliver full-stack solutions for both online stores and live experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="!mt-4 lg:mt-12 flex flex-wrap gap-4"
                        style={{marginTop: '16px'}}
                    >
                        <MainButton>
                            Our Story
                        </MainButton>
                    </motion.div>
                </div>


            </div>
        </section>
    )
}