import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1124",
        "bg-alt": "#0D1426",
        "panel-from": "#16213F",
        "panel-to": "#0E1731",
        ink: "#F8FAFC",
        "ink-secondary": "#A6B2CC",
        "ink-tertiary": "#93A0BB",
        "ink-quaternary": "#8593AE",
        "ink-muted": "#6E7C98",
        blue: "#1D4ED8",
        violet: "#7C3AED",
        match: "#10B981",
        // Acento de marca: la ventana encendida de noche.
        amber: "#F0A868",
        "amber-deep": "#E8814A",
        "amber-ink": "#241509",
        "accent-blue": "#6E8BF5",
        "accent-violet": "#B79CF7",
        "accent-violet-light": "#C4B2FB",
        "accent-violet-mid": "#A78BFA",
        hairline: "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      // Un solo sistema de esquinas, duro y parejo. El borde blando de 20 a
      // 26px lee a plantilla; 3 a 4px lee editorial.
      borderRadius: {
        card: "4px",
        "card-lg": "4px",
        btn: "3px",
        chip: "3px",
      },
      boxShadow: {
        card: "0 44px 90px -34px rgba(0,0,0,0.75)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6.5s ease-in-out infinite",
        "spin-slow": "spin-slow 90s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
