const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
        animation: {
            'spin-slow': 'spin 4s linear infinite',
        },
        keyframes: {
            'border': {
                to: { '--border-angle': '360deg' },
            }
        }                      
    },
},
};

export default config;
