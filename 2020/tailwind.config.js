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
        heading: ['NeueMetanaVariable', 'sans-serif'],
        body: ['IsidoraAlt', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.5rem',
        xl: '2.25rem',
      },
      colors: {
        transparent: 'transparent',
        dark: '#202020',
        darkred: '#402832',
        light: '#F9F9F8',
        gray: '#8C8B88',
      },
    },
  },
  variants: {},
  plugins: [],
};
