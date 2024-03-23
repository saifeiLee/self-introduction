/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#2997FF",
                gray: {
                    DEFAULT: "#86868b",
                    100: "#94928d",
                    200: "#afafaf",
                    300: "#42424570",
                },
                zinc: "#101010",
                pumpkin: {
                    50: '#fff4ed',
                    100: '#ffe6d5',
                    200: '#feccaa',
                    300: '#fdac74',
                    400: '#fb8a3c',
                    500: '#f97316',
                    600: '#ea670c',
                    700: '#c2570c',
                    800: '#9a4a12',
                    900: '#7c3d12',
                    950: '#432007',
                },
            },
        },
    },
    plugins: [],
};