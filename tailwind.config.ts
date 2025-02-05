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
            "navigation": ["min(2.8vw, 0.82rem)", { letterSpacing: "0.1rem", fontWeight: 500 }],
            "size-p-wide": ["min(2.8vw, 0.82rem)", { letterSpacing: "0.08rem", lineHeight: "1.5rem", fontWeight: "500" }],
            "size-p": ["min(3vw, 0.82rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "500" }],
            size3: ["min(2.8vw, 0.72rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "500" }],
            size2: ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "500" }],
            size1: ["min(3.8vw, 1.05rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "400" }],
            title4: ['min(3.6vw, 1.1rem)', { letterSpacing: "0rem", lineHeight: "1.8rem", fontWeight: "400" }],
            title3: ['min(4vw, 1.3rem)', { letterSpacing: "0rem", lineHeight: "2rem", fontWeight: "400" }],
            title2: ['min(4.5vw, 1.6rem)', { letterSpacing: "0rem", lineHeight: "2.2rem", fontWeight: "400" }],
            title1: ['min(5vw, 2.2rem)', { letterSpacing: "0rem", lineHeight: "2.4rem", fontWeight: "400" }],
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

            color2: '#27434c',
            color3: '#d97c27',
            color4: '#24989f',
            color5: '#e56e46',
            
            color10: "#c9cedf",
            color9: "#efebe3",
            color7: '#c8d5d5',
            color8: "#ece9e9",

            white: '#ffffff',

            font1: '#221c1c',
            font2: '#973818',
        },
    },
    plugins: [],
};
export default config;
