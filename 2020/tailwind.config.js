module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['dist/**/*.html'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        display: ['NeueMetana', 'sans-serif'],
        body: ['ReemKufi', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        dark: '#202020',
        light: '#F8F6F0',
        gray: '#8C8B88',
      },
    },
  },
  variants: {},
  plugins: [],
};
