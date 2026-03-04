module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './blog/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-green-light': '#39ff14',
        'neon-green-dark': '#00cc33',
        'space-black': '#0a0e27',
        'space-dark': '#1a1f3a',
        'space-darker': '#0f1419',
        'space-blue': '#1e3a5f',
        'neon-cyan': '#00d9ff',
        'neon-pink': '#ff006e',
        'neon-purple': '#b537f2',
        'orange-70s': '#ff8c00',
        'gold-70s': '#ffd700',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-cyan-glow': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-bright': '0 0 40px rgba(0, 255, 65, 0.8), 0 10px 30px rgba(0, 215, 255, 0.4)',
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        'blink': 'blink 1s infinite',
        'flicker': 'flicker 0.15s infinite',
        'textGlow': 'textGlow 3s ease-in-out infinite',
        'moveGrid': 'moveGrid 20s linear infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite',
        'orbit1': 'orbit1 20s linear infinite',
        'orbit2': 'orbit2 30s linear infinite reverse',
        'orbit3': 'orbit3 25s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.98' },
        },
        textGlow: {
          '0%, 100%': {
            textShadow: '0 0 20px #00ff41, 0 0 40px #00d9ff, 0 0 60px rgba(0, 255, 65, 0.5), 3px 3px 0px #ff006e',
          },
          '50%': {
            textShadow: '0 0 40px #00ff41, 0 0 60px #00d9ff, 0 0 80px rgba(0, 255, 65, 0.8), 3px 3px 0px #ff006e',
          },
        },
        moveGrid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        orbit1: {
          '0%': { transform: 'translate(-200px, -200px)' },
          '100%': { transform: 'translate(200px, 200px)' },
        },
        orbit2: {
          '0%': { transform: 'translate(150px, -150px)' },
          '100%': { transform: 'translate(-150px, 150px)' },
        },
        orbit3: {
          '0%': { transform: 'translate(-150px, 150px)' },
          '100%': { transform: 'translate(150px, -150px)' },
        },
      },
    },
  },
  plugins: [],
};
