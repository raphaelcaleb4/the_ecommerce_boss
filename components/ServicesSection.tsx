'use client'

import { motion } from 'framer-motion'
import Hairline from "@/components/ui/Hairline";
import Image from "next/image";
import MainButton from "@/components/ui/MainButton";


export default function ServicesSection() {
    return (
        <motion.section
            className={`tSection justify-center`}
        >

            <div className={`container`}>
                <div className={`vWrapper`}>

                    <div className={`headingWrap w-full max-w-7xl flex flex-col items-center gap-4`}>

                        <Hairline>What We Do</Hairline>
                        <h2 className="headingTwo text-center">

                            <span className="">YOUR GROWTH.</span>
                            <br />
                            <span className="inline-block !text-teb-dark-camo">THREE WAYS.</span>
                        </h2>

                    </div>

                    {/*CARDS*/}
                    <div className={`relative flex flex-col flex-wrap md:flex-row justify-center items-center gap-8 max-xl:gap-8`}>
                        {/*Service Card 1*/}
                        <div className={`serviceCardWrapper relative p-[2px] rounded-4xl bg-[linear-gradient(147.36deg,#F2EBE5_0%,rgba(242,235,229,0%)_40%,rgba(242,235,229,0%)_60%,#F2EBE5_100%),linear-gradient(#595957,#595957)] overflow-hidden`}>
                            <div
                                className={`serviceCard`}>
                                <div
                                    className={`absolute object-cover top-0 bottom-0 left-0 right-0 blur-lg bg-[url(/images/service_ecommerce.jpg)]`}></div>
                                <span className={`absolute top-0 bottom-0 left-0 right-0 bg-teb-cream/60`}></span>

                                <div className={`cardIconWrap`}>
                                    <Image src={`TEB LOGOMARK WHITE.svg`} alt={`icon`} width={50} height={50}
                                    className={`cardIcon`}
                                    />
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree`}>
                                        Ecommerce & Digital Growth
                                    </h3>
                                    <p className={`relative`}>
                                        We build conversion-focused websites, set up your store, run data-backed ads,
                                        and help you scale profitably.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/*Service Card 2*/}
                        <div className={`serviceCardWrapper relative p-[2px] rounded-4xl bg-[linear-gradient(147.36deg,#F2EBE5_0%,rgba(242,235,229,0%)_40%,rgba(242,235,229,0%)_60%,#F2EBE5_100%),linear-gradient(#595957,#595957)] overflow-hidden`}>
                            <div
                                className={`serviceCard`}>
                                <div
                                    className={`absolute object-cover top-0 bottom-0 left-0 right-0 blur-lg bg-[url(/images/service_sold_out.jpg)]`}></div>
                                <span className={`absolute top-0 bottom-0 left-0 right-0 bg-teb-dark-grey/90`}></span>

                                <div className={`cardIconWrap bg-teb-cream`}>
                                    <Image src={`ticket.svg`} alt={`icon`} width={50} height={50}
                                           className={`cardIcon`}
                                    />
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree text-white`}>
                                        SOLD OUT by Ecommerce Boss
                                    </h3>
                                    <p className={`relative text-white`}>
                                        We turn live events into sold-out successes. From websites and ticketing funnels to paid ads, influencer marketing, and audience nurture, we drive real results for festivals and concerts.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/*Service Card 3*/}
                        <div className={`serviceCardWrapper relative p-[2px] rounded-4xl bg-[linear-gradient(147.36deg,#F2EBE5_0%,rgba(242,235,229,0%)_40%,rgba(242,235,229,0%)_60%,#F2EBE5_100%),linear-gradient(#595957,#595957)] overflow-hidden`}>
                            <div
                                className={`serviceCard h-full`}>
                                <div
                                    className={`absolute object-cover top-0 bottom-0 left-0 right-0 blur-lg bg-[url(/images/service_ad_boss.jpg)]`}></div>
                                <span className={`absolute top-0 bottom-0 left-0 right-0 bg-teb-silver/90`}></span>

                                <div className={`cardIconWrap bg-teb-dark-grey`}>
                                    <Image src={`brain.svg`} alt={`icon`} width={50} height={50}
                                           className={`cardIcon`}
                                    />
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree`}>
                                        Ad Boss IQ
                                    </h3>
                                    <p className={`relative`}>
                                        An AI-powered ad assistant that helps you plan, target, and optimize campaigns across platforms — with smart insights for better ROI.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <MainButton>
                        Our Services
                    </MainButton>

                </div>
            </div>


        </motion.section>
    )
}

export const dynamic = 'force-dynamic';
