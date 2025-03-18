module.exports = {
  plugins: {
    'tailwindcss': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    },
    'autoprefixer': {
      flexbox: 'no-2009'
    }
  }
} 
