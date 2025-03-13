/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Bleu foncé
                secondary: "#FACC15", // Jaune festival
                skyblue: "#87CEEB",  // Bleu ciel
                dark: "#1A1A1A",
                light: "#F9FAFB",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};

