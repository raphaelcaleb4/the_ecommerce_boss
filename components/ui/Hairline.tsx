'use client'

import { motion } from 'framer-motion'

interface HairlineProps {
    children: React.ReactNode
    className?: string
    className2?: string
}

export default function Hairline({ children, className = '', className2 = '' }: HairlineProps) {
    return (
        <motion.div
            className={`hairline relative flex items-center gap-2 px-[20px] py-[12px] text-teb-dark-camo bg-teb-cream rounded-full ${className}`}
        >
            <span className={`relative w-[8px] h-[9px] lg:w-[10px] lg:h-[10px] bg-teb-dark-camo rounded-full ${className2}`}
                  style={{width: '8px', height: '8px'}}
            ></span>
            <p className="relative text-sm lg:text-lg leading-none">
                {children}
            </p>

        </motion.div>
    )
}