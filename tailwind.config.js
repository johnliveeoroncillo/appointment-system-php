import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],

    theme: {
        extend: {
            colors:{
                primaryColor: 'rgb(19 78 74)',
                secondaryColor: 'rgb(13 148 136)',
                bgColor: '#EEEEEE',
                textColor: '#F9F9F9',
                darkText: '#191919',
              },
              
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs")],
};
