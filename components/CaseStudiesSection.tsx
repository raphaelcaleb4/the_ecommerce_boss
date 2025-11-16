'use client'

import { motion } from 'framer-motion'
import Hairline from "@/components/ui/Hairline";
/*import Image from "next/image";*/
import MainButton from "@/components/ui/MainButton";

export default function CaseStudiesSection() {
    return (
        <motion.section
            className={`tSection justify-center bg-teb-black text-white`}
        >

            <div className={`container`}>
                <div className={`vWrapper`}>

                    <div className={`headingWrap w-full max-w-7xl flex flex-col items-center gap-4 `}>

                        <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>What We Do</span></Hairline>
                        <h2 className="headingTwo text-center !text-teb-cream">

                            <span className="!text-white">YOUR GROWTH.</span>
                            <br />
                            <span className="inline-block !text-teb-cream">THREE WAYS.</span>
                        </h2>

                    </div>

                    {/*CARDS*/}
                    <div className={`w-full flex flex-col justify-center items-center gap-8 lg:sticky`}>

                        {/*Case Card 1*/}
                        <div className={`caseCard w-full top-[100px]`}>

                                <div className={`caseImgWrap bg-[url(naija_ff.jpg)] object-fill`}>
                                    {/*<Image src={`/images/naija-food-2.png`} alt={`icon`} width={50} height={50}
                                           className={`caseImg`}
                                    />*/}
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree`}>
                                        Naija Food Festival Canada
                                    </h3>
                                    <p className={`relative`}>
                                        Built a complete digital funnel — website, ticketing, and ads. Sold out in 2 weeks.
                                    </p>
                                </div>

                                <div className={`relative flex flex-wrap gap-4`}>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Website</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Ticketing</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Event</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Marketing</span></Hairline>

                                </div>

                            </div>

                        {/*Case Card 2*/}
                        <div className={`caseCard w-full top-[150px]`}>

                                <div className={`caseImgWrap bg-[url(olic.png)]  object-fill`}>
                                    {/*<Image src={`/images/naija-food-2.png`} alt={`icon`} width={50} height={50}
                                           className={`caseImg`}
                                    />*/}
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree`}>
                                        Asake Live In Canada
                                    </h3>
                                    <p className={`relative`}>
                                        Handled web design, social ads, and email marketing. Record turnout and viral engagement.
                                    </p>
                                </div>

                                <div className={`relative flex flex-wrap gap-4`}>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Website</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Ticketing</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Event</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Marketing</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Email Marketing</span></Hairline>

                                </div>

                            </div>

                        {/*Case Card 3*/}
                        <div className={`caseCard w-full top-[200px]`}>

                                <div className={`caseImgWrap bg-[url(komfort.jpg) object-fill]`}>
                                    {/*<Image src={`/images/naija-food-2.png`} alt={`icon`} width={50} height={50}
                                           className={`caseImg`}
                                    />*/}
                                </div>

                                <div className={`relative flex flex-col gap-4`}>
                                    <h3 className={`headingThree`}>
                                        Komfort Place Signature
                                    </h3>
                                    <p className={`relative`}>
                                        Drove 150% online traffic growth and reduced ad cost per sale by 38%.
                                    </p>
                                </div>

                                <div className={`relative flex flex-wrap gap-4`}>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Website</span></Hairline>
                                    <Hairline className={`!bg-teb-silver/20 !backdrop-blur-sm`} className2={`!bg-teb-cream`}><span className={`!text-teb-cream`}>Marketing</span></Hairline>

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
