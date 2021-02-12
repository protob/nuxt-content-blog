module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      post: '1 1 300px',
      100: '1 1 100%',
      'post-large-content': '0 1 361px',
    },
    zIndex: {
      '-10': '-10',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      1000: 1000,
      auto: 'auto',
    },
    corePlugins: {
      container: false,
    },

    extend: {
      height: {
        96: '24rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      width: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
      },
    },
    radialGradients: {
      shapes: {
        // defaults to this value
        default: 'ellipse',
      },
      sizes: {
        // defaults to this value
        default: '',
      },
      positions: {
        // defaults to these values
        default: 'center',
        t: 'top',
      },
      colors: {
        // defaults to {}
        'gray-to-black': [
          'rgba(25, 25, 25, 1)',
          'rgba(8, 8, 8, 1)',
          'rgba(0, 0, 0, 1)',
        ],
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        },
      })
    },
  ],
}
