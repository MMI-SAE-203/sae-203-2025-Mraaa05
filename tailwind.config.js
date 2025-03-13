/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                skyblue: "#87CEEB", // Bleu ciel
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
