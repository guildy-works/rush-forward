import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontSize: {
            "size-p-wide": ["min(2.8vw, 0.82rem)", {letterSpacing: "0.15rem", lineHeight:"1.5rem", fontWeight: "500"}],
            "size-p": ["min(2.8vw, 0.82rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem",fontWeight: "500"}],
            size3:  ["min(1vw, 0.72rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "500"}],
            size2: ["min(3.2vw, 1rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "500"}],
            size1:  ["min(1.7vw, 1.25rem)", {letterSpacing: "0.08rem", lineHeight:"1.2rem", fontWeight: "400"}],
            title4: ['min(3.6vw, 1.1rem)', { letterSpacing: "0.24rem" }],
            title3: ['min(4vw, 1.3rem)', { letterSpacing: "0.24rem" }],
            title2: ['min(4.5vw, 1.6rem)', { letterSpacing: "0.24rem" }],
            title1: ['min(5vw, 2.2rem)', { letterSpacing: "0.24rem" }],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            asterdam: ['Amsterdam', 'sans-serif'],
            jost: ['Jost', 'sans-serif'],
        },
        colors: {
            ...colors,

            color1: '#27434f',
            color2: '#5b8990',
            color3: '#176e81',
            color4: '#24989f',
            color5: '#6cb9be',
            color6: '#b6d1d1',
            color7: '#e1e7e7',
            color8 :"#ebf1f2",

            white: '#ffffff',

            font1: '#04292e',
            font2: '#25718a',
            font3: '#c07a7a',

            grey1: '#bba3a3',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;
