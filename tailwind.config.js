/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./PolarOps.html'],
  theme: {
    extend: {
      colors: {
        navy: '#1E1B4B',
        body: '#475569',
        muted: '#94A3B8',
        ice: '#F0F9FF',
        offwhite: '#F8FAFC',
        hairline: '#E2E8F0',
        accent: '#5B54E6',
        accentHover: '#4640C8',
        accentTint: '#ECEBFF',
        success: '#16A34A',
        successBg: '#DCFCE7',
        warning: '#D97706',
        warningBg: '#FEF3C7',
        critical: '#DC2626',
        criticalBg: '#FEE2E2',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      borderRadius: { card: '28px', ctl: '14px' },
    },
  },
};
