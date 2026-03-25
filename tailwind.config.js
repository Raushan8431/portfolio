/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0a0a0f',
          DEFAULT: '#0f0f1a',
          light: '#1a1a2e'
        },
        primary: {
          DEFAULT: '#00d4ff',
          light: '#33ddff',
          dark: '#0099cc'
        },
        accent: {
          DEFAULT: '#ff0080',
          light: '#ff33a0',
          dark: '#cc0066'
        },
        success: {
          DEFAULT: '#00ff88',
          light: '#33ffaa',
          dark: '#00cc66'
        },
        warning: {
          DEFAULT: '#ffaa00',
          light: '#ffcc33',
          dark: '#cc8800'
        },
        error: {
          DEFAULT: '#ff3366',
          light: '#ff6699',
          dark: '#cc1a4d'
        },
        purple: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed'
        },
        orange: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c'
        },
        teal: {
          DEFAULT: '#14b8a6',
          light: '#2dd4bf',
          dark: '#0f766e'
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      fontFamily: {
        sans: ['Share Tech Mono', 'monospace'],
        mono: ['Share Tech Mono', 'monospace']
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(0, 212, 255, 0.6), 0 0 40px -10px rgba(0, 212, 255, 0.3)',
        'glow-accent': '0 0 20px -5px rgba(255, 0, 128, 0.6), 0 0 40px -10px rgba(255, 0, 128, 0.3)',
        'glow-success': '0 0 20px -5px rgba(0, 255, 136, 0.6), 0 0 40px -10px rgba(0, 255, 136, 0.3)',
        'glow-purple': '0 0 20px -5px rgba(139, 92, 246, 0.6), 0 0 40px -10px rgba(139, 92, 246, 0.3)',
        'glow-orange': '0 0 20px -5px rgba(249, 115, 22, 0.6), 0 0 40px -10px rgba(249, 115, 22, 0.3)',
        'glow-teal': '0 0 20px -5px rgba(20, 184, 166, 0.6), 0 0 40px -10px rgba(20, 184, 166, 0.3)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #00d4ff 0%, #ff0080 25%, #8b5cf6 50%, #00ff88 75%, #ffaa00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix': 'matrix 20s linear infinite',
        'glitch': 'glitch 1s infinite',
        'scan': 'scan 2s linear infinite',
        'rainbow': 'rainbow 3s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        matrix: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        rainbow: {
          '0%': { color: '#00d4ff' },
          '16.66%': { color: '#ff0080' },
          '33.33%': { color: '#8b5cf6' },
          '50%': { color: '#00ff88' },
          '66.66%': { color: '#ffaa00' },
          '83.33%': { color: '#f97316' },
          '100%': { color: '#00d4ff' }
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            filter: 'brightness(1.2)'
          }
        }
      }
    },
  },
  plugins: [],
};