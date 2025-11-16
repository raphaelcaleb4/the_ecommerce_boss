'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 20, stiffness: 100 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight

        const setCanvasSize = () => {
            if (!canvas) return
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        // Grid of control points for the mesh
        const cols = 15
        const rows = 10
        const points: Point[] = []

        class Point {
            x: number
            y: number
            baseX: number
            baseY: number
            vx: number
            vy: number
            r: number
            g: number
            b: number

            constructor(x: number, y: number, index: number) {
                this.baseX = x
                this.baseY = y
                this.x = x
                this.y = y
                this.vx = (Math.random() - 0.5) * 0.5
                this.vy = (Math.random() - 0.5) * 0.5

                // Create gradient effect with cream tones
                const gradient = index / (cols * rows)
                const colors = [
                    { r: 242, g: 235, b: 229 }, // teb-cream
                    { r: 230, g: 220, b: 210 }, // slightly darker cream
                    { r: 220, g: 210, b: 200 }, // medium cream
                    { r: 210, g: 200, b: 190 }, // darker cream
                ]

                const colorIndex = Math.floor(gradient * (colors.length - 1))
                const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1)
                const localGradient = (gradient * (colors.length - 1)) - colorIndex

                this.r = Math.floor(colors[colorIndex].r + (colors[nextColorIndex].r - colors[colorIndex].r) * localGradient)
                this.g = Math.floor(colors[colorIndex].g + (colors[nextColorIndex].g - colors[colorIndex].g) * localGradient)
                this.b = Math.floor(colors[colorIndex].b + (colors[nextColorIndex].b - colors[colorIndex].b) * localGradient)
            }

            update(mouseX: number, mouseY: number, time: number) {
                // Wave motion
                const wave = Math.sin(time * 0.001 + this.baseX * 0.01) * 20
                const wave2 = Math.cos(time * 0.0015 + this.baseY * 0.01) * 15

                // Mouse interaction
                const dx = mouseX - this.x
                const dy = mouseY - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const maxDistance = 200

                let targetX = this.baseX + wave
                let targetY = this.baseY + wave2

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance
                    const angle = Math.atan2(dy, dx)
                    targetX -= Math.cos(angle) * force * 80
                    targetY -= Math.sin(angle) * force * 80
                }

                // Smooth movement
                this.x += (targetX - this.x) * 0.05
                this.y += (targetY - this.y) * 0.05
            }
        }

        // Create grid of points
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = (col / (cols - 1)) * width
                const y = (row / (rows - 1)) * height
                points.push(new Point(x, y, row * cols + col))
            }
        }

        let currentMouseX = width / 2
        let currentMouseY = height / 2
        let time = 0

        const unsubscribeX = mouseXSpring.on('change', (latest) => {
            currentMouseX = latest
        })
        const unsubscribeY = mouseYSpring.on('change', (latest) => {
            currentMouseY = latest
        })

        let animationFrameId: number

        const animate = () => {
            if (!canvas || !ctx) return

            time++
            ctx.clearRect(0, 0, width, height)

            // Update points
            points.forEach(point => {
                point.update(currentMouseX, currentMouseY, time)
            })

            // Draw mesh with gradient fills
            for (let row = 0; row < rows - 1; row++) {
                for (let col = 0; col < cols - 1; col++) {
                    const topLeft = points[row * cols + col]
                    const topRight = points[row * cols + col + 1]
                    const bottomLeft = points[(row + 1) * cols + col]
                    const bottomRight = points[(row + 1) * cols + col + 1]

                    // Create gradient for each quad
                    const centerX = (topLeft.x + topRight.x + bottomLeft.x + bottomRight.x) / 4
                    const centerY = (topLeft.y + topRight.y + bottomLeft.y + bottomRight.y) / 4

                    const gradient = ctx.createRadialGradient(
                        centerX, centerY, 0,
                        centerX, centerY, Math.max(width, height) / 3
                    )

                    // Cream-colored gradients with subtle opacity
                    gradient.addColorStop(0, `rgba(${topLeft.r}, ${topLeft.g}, ${topLeft.b}, 0.4)`)
                    gradient.addColorStop(1, `rgba(${bottomRight.r}, ${bottomRight.g}, ${bottomRight.b}, 0.15)`)

                    ctx.fillStyle = gradient
                    ctx.beginPath()
                    ctx.moveTo(topLeft.x, topLeft.y)
                    ctx.lineTo(topRight.x, topRight.y)
                    ctx.lineTo(bottomRight.x, bottomRight.y)
                    ctx.lineTo(bottomLeft.x, bottomLeft.y)
                    ctx.closePath()
                    ctx.fill()

                    // Draw subtle mesh lines in cream tone
                    ctx.strokeStyle = 'rgba(210, 200, 190, 0.75)'
                    ctx.lineWidth = 1
                    ctx.stroke()
                }
            }

            // Add cream glow orbs at mouse position
            const glowGradient = ctx.createRadialGradient(
                currentMouseX, currentMouseY, 0,
                currentMouseX, currentMouseY, 150
            )
            glowGradient.addColorStop(0, 'rgba(242, 235, 229, 0.3)')
            glowGradient.addColorStop(0.5, 'rgba(230, 220, 210, 0.15)')
            glowGradient.addColorStop(1, 'rgba(220, 210, 200, 0)')

            ctx.fillStyle = glowGradient
            ctx.fillRect(0, 0, width, height)

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', setCanvasSize)
            cancelAnimationFrame(animationFrameId)
            unsubscribeX()
            unsubscribeY()
        }
    }, [mouseXSpring, mouseYSpring])

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        />
    )
}