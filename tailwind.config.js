/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        WorkSansBold: ["WorkSans-Bold", "sans-serif"],
        WorkSansExtraBold: ["WorkSans-ExtraBold", "sans-serif"],
        WorkSansSemiBold: ["WorkSans-SemiBold", "sans-serif"],
        WorkSansMedium: ["WorkSans-Medium", "sans-serif"],
        WorkSans: ["WorkSans-Regular", "sans-serif"],
        WorkSansLight: ["WorkSans-Light", "sans-serif"],
        WorkSansExtraLight: ["WorkSans-ExtraLight", "sans-serif"],
        WorkSansThin: ["WorkSans-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
