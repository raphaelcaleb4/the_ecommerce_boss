'use client'

import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Main component that you'll import in page.tsx
export default function SlideTabs() {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
        >
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Pricing</Tab>
            <Tab setPosition={setPosition}>Features</Tab>
            <Tab setPosition={setPosition}>Docs</Tab>
            <Tab setPosition={setPosition}>Blog</Tab>

            <Cursor position={position} />
        </ul>
    )
}

// Individual tab component
const Tab = ({
                 children,
                 setPosition,
             }: {
    children: string
    setPosition: Dispatch<SetStateAction<Position>>
}) => {
    const ref = useRef<null | HTMLLIElement>(null)

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return

                const { width } = ref.current.getBoundingClientRect()

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    )
}

// Animated cursor that follows the hovered tab
const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
    )
}

// Type definition for cursor position
type Position = {
    left: number // Horizontal position of cursor
    width: number // Width of cursor (matches tab width)
    opacity: number // Visibility of cursor (0 when not hovering)
}