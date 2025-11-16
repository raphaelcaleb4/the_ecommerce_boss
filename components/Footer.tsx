'use client'

import { motion } from 'framer-motion'
import Image from "next/image";

export default function Footer() {
    return (
        <motion.section
            className={`tSection !lg:min-h-0 !min-h-0 h-auto`}
            style={{minHeight: "0vh !important", height: "auto !important", paddingBlock: "0px !important"}}
        >

            <div className={`container flex-col`}>
                <div className={`flex w-full items-start flex-col md:flex-row p-10 md:p-16 gap-8 md:gap-8 justify-between`}>

                    {/* Col 1 */}
                    <div className="headingWrap flex flex-col relative gap-6 max-w-[30%]">
                        <div className="flex flex-col justify-start relative overflow-hidden">

                            <Image className="relative object-contain max-w-[80%]" src="/TEB LOGO BLACK.svg" alt="About Us" width={516} height={640} />

                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-teb-dark-grey max-w-full text-base md:text-lg lg:text-2xl"
                        >
                            The Ecommerce Boss is a premier digital transformation brand dedicated to helping businesses start, stay, and grow online.
                        </motion.p>

                    </div>

                    {/* Col 2 */}
                    <div className="headingWrap flex flex-col relative gap-10 ">
                        <div className="flex flex-col justify-start relative overflow-hidden">

                            <h3 className="headingThree text-teb-black text-center md:text-left">
                                Company
                            </h3>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex flex-col text-teb-dark-grey text-base md:text-lg lg:text-2xl gap-4"
                        >
                            <a className={``} href={``}>About</a>
                            <a className={``} href={``}>Services</a>
                            <a className={``} href={``}>Contact</a>
                            <a className={``} href={``}>Our Work</a>
                        </motion.p>

                    </div>

                    {/* Col 3 */}
                    <div className="headingWrap flex flex-col relative gap-10 ">
                        <div className="flex flex-col justify-start relative overflow-hidden">

                            <h3 className="headingThree text-teb-black text-center md:text-left">
                                Company
                            </h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex flex-col text-teb-dark-grey text-base md:text-lg lg:text-2xl gap-4"
                        >
                            <a className={``} href={`mailto:support@ecommerceboss.ng`}>support@ecommerceboss.ng</a>
                            <a className={``} href={`tel:+2348093340402`}>+234 809 334 0402</a>
                            <div className={`flex gap-8`}>
                                <a className={`h-8 flex`} href={``}>
                                    <Image className={'h-full w-auto'} src={`/facebook_icon.svg`} alt={`Facebook`} width={32} height={32} />
                                </a>
                                <a className={`h-8 flex`} href={``}>
                                    <Image className={'h-full w-auto'} src={`/mail_icon.svg`} alt={`E-mail`} width={32} height={32} />
                                </a>
                                <a className={`h-8 flex`} href={``}>
                                    <Image className={'h-full w-auto'} src={`/insta_icon.svg`} alt={`Instagram`} width={32} height={32} />
                                </a>
                            </div>
                        </motion.div>

                    </div>





                </div>
                <div className={`flex items-center justify-center border-0 border-t-2 border-teb-dark-grey w-full pt-8`}>
                    <p className={``}>
                        © Copyright 2025 Powered by TheEcommerceBoss
                    </p>
                </div>
            </div>


        </motion.section>

    )
}