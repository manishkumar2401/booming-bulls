tailwind.config = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 2s linear infinite',
            },
            keyframes: {
                'border-rotate': {
                    to: { '--border-angle': '360deg' },
                }
            }                      
        },
    },
};