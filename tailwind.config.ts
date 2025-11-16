import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'teb-black': '#262626',
                'teb-dark-grey': '#40403E',
                'teb-cream': '#F2EBE5',
                'teb-dark-camo': '#595957',
                'teb-grey': '#8C8C8A',
                'teb-silver': '#BFBFBD',
                'teb-card-green': '#3E4927',
            },
            fontFamily: {
                orbitron: ['var(--font-orbitron)', 'sans-serif'],
                manrope: ['var(--font-manrope)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config