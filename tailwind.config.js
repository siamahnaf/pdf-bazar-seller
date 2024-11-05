/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["react-datepicker", "react-datepicker__header", "react-datepicker__time-container", "richtext-outline"],
  theme: {
    extend: {
      screens: {
        xxs: "0px",
        xs: "360px",
        sm: "480px",
        msm: "540px",
        lsm: "640px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
        "3xl": "1536px"
      },
      boxShadow: {
        "3xl": "3px 0px 15px rgba(235, 249, 243, 0.8)"
      },
      colors: {
        main: "#FF9500",
        text: "#322F2F",
        greyed: "#E8E7E7",
      },
      backgroundImage: {
        gradientOne: "linear-gradient(315deg, #eb4786 0%, #b854a6 74%)",
        gradientTwo: "linear-gradient(315deg, #875fc0 0%, #5346ba 74%)",
        gradientThree: "linear-gradient(315deg, #47c5f4 0%, #6791d9 74%)",
        gradientFour: "linear-gradient(315deg, #ff9a8b 0%, #ff6a88 74%)",
        gradientFive: "linear-gradient(315deg, #8de7a1 0%, #56d4a5 74%)",
        gradientSix: "linear-gradient(315deg, #f8cdda 0%, #1d2b64 74%)",
        gradientSeven: "linear-gradient(315deg, #ffcf71 0%, #f97794 74%)",
        gradientEight: "linear-gradient(315deg, #ffcc70 0%, #c850c0 74%)",
      }
    },
  },
  plugins: [],
}

