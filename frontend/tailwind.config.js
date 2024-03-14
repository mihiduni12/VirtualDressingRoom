/** @type {import('tailwindcss').Config} */
export const important = true;
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    spacing: {
      100: "100px",
    },
    fontFamily: {
      Spirax: ['Spirax', "system-ui"],
      Coda: ['Coda', "system-ui"],
      Natural: ['Kay Pho Du', "serif"],
      CantoraOne: ['Cantora One', "sans-serif"],
      Abel: ['Abel', "sans-serif"],
      Cairo: ['Cairo', "sans-serif"],
      Barlow: ['Barlow', "sans-serif"],
      FiraSans: ['Fira Sans', "sans-serif"],
      Satisfy: ['Satisfy', "cursive"],
      Sacramento: ['Sacramento', "cursive"],
      BadScript: ['Bad Script', "cursive"],
      Protest: ['Protest Revolution', "sans-serif"]
    },
  },
  colors: {
    transparent: "transparent",
    white: "#ffffff",
    purple: "#3f3cbb",
    midnight: "#121063",
    metal: "#565584",
    tahiti: "#3ab7bf",
    silver: "#ecebff",
    "bubble-gum": "#ff77e9",
    bermuda: "#0099FF",
    yellow: "rgba(245, 245, 219, 0.98)",
    yellowDr: "#a07628",
    BrownLi: "#d89f5a",
    BrownLi2: "#f7c973",
    green: "#8c9861",
    greenWh: "#ddecd2",
    greenNa: "#439448",
    greenLi: "#effdf1"
  },
  backgroundImage: {
    'food': "url('./images/food2.jpg')",
  },
  animation: {
    'infinite-scroll': 'infinite-scroll 25s linear infinite',
  },
  keyframes: {
    'infinite-scroll': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-100%)' },
    }
  }
};
export const plugins = [];
