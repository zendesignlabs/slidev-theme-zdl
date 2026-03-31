import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Background + text combos
    'bg-main': 'bg-[var(--zdl-bg)] text-[var(--zdl-text)]',
    'bg-ink': 'bg-[#0F0E0C] text-[#FFFEF9]',
    'bg-parchment': 'bg-[#FFFEF9] text-[#0F0E0C]',

    // Stamp effects
    'stamp-shadow': 'shadow-[4px_4px_0px_0px_var(--zdl-shadow-color)]',
    'stamp-shadow-lg': 'shadow-[6px_6px_0px_0px_var(--zdl-shadow-color)]',
    'stamp-shadow-accent': 'shadow-[4px_4px_0px_0px_#7B61FF]',
    'stamp-border': 'border-3 border-[var(--zdl-text)] border-solid',

    // Typography shortcuts
    'text-stamp': 'uppercase tracking-[0.15em] font-medium text-[13px]',
    'text-display': 'text-[64px] font-bold tracking-[-0.02em] leading-[1.1]',

    // Color shortcuts
    'text-aura': 'text-[#7B61FF]',
    'text-spark': 'text-[#FFB800]',
    'text-ember': 'text-[#E85D3A]',
    'text-muted': 'text-[var(--zdl-text-muted)]',
  },
  theme: {
    colors: {
      aura: '#7B61FF',
      spark: '#FFB800',
      ember: '#E85D3A',
      ink: '#0F0E0C',
      parchment: '#FFFEF9',
      stone: '#5A5850',
      fog: '#9A9790',
      dust: '#E8E6E1',
    },
  },
})
