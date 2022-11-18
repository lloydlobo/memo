// @next/font can be used with Tailwind CSS through a CSS variable.
// In the example below, we use the font Inter from @next/font/google (You can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter. Then, use inter.variable to add the CSS variable to your HTML document.
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // TODO: Add gradients....
    // https://hypercolor.dev/
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },
        },
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: ["night", "bumblebee", "dracula"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dracula", // Overwrite default dark theme for prefers system.
    },
};
