'use client'

import { motion } from 'framer-motion'
import Image from "next/image";
import MainButton from "@/components/ui/MainButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CTASection() {
    return (
        <motion.section
            className={`tSection justify-center`}
        >

            <div className={`container`}>
                <div className={`grid w-full items-center lg:grid-cols-2 md:items-center p-10 md:p-16 rounded-[80px] bg-teb-cream overflow-hidden gap-8 md:gap-12 justify-between`}>

                    {/* Main heading */}
                    <div className="headingWrap flex flex-col relative gap-6 ">
                        <div className="flex flex-col justify-start relative overflow-hidden">


                            <h2 className="headingTwo text-center md:text-left">
                                <span className="">READY TO GROW</span>
                                <br />
                                <span className="inline-block">OR SELL OUT?</span>
                            </h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-[--color-teb-dark-camo]/80 text-base md:text-lg lg:text-2xl"
                        >
                            Whether it’s your next launch or your next concert, we’ll help you reach the crowd that matters.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className="!mt-4 lg:mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
                            style={{marginTop: '16px'}}
                        >
                            <SecondaryButton>
                                Lets Build My Store
                            </SecondaryButton>
                            <MainButton>
                                Try Ad Boss IQ
                            </MainButton>

                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="hidden md:flex relative justify-center w-full">
                        <Image className="relative object-contain max-w-[80%]" src="/teb_3d_gold.png" alt="About Us" width={516} height={640} />
                    </div>



                </div>
            </div>


        </motion.section>

    )
}