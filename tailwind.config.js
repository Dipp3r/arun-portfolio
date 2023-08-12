/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage:{
          code: "url('https://user-images.githubusercontent.com/91364256/195585848-336e41e1-cd41-41d5-b1f4-20bba885a5cd.png')",
          "light-code":
            "url('https://user-images.githubusercontent.com/91364256/195586032-3cad540b-0127-4d7c-bf3b-94f490ab117d.png')",
          college: "url('../src/assets/images/college.gif')",
          school: "url('../src/assets/images/school.gif')",
          sunset: "url('../src/assets/images/sunset.gif')",
          code_gif: "url('../src/assets/images/LightHouse.gif')",
          web2: "url('../src/assets/images/weathered_golden_monkey.png')",
          web2_gif: "url('../src/assets/images/luminescene_gif.gif')",
          web3: "url('../src/assets/images/monkey.png')",
          web3_gif: "url('../src/assets/images/suzanne_gif.gif')",
          web4: "url('../src/assets/images/wood.png')",
          web4_gif: "url('../src/assets/images/wood_gif.gif')",
          web5: "url('../src/assets/images/plane.png')",
          web5_gif: "url('../src/assets/images/plane_gif.gif')",
          web6: "url('../src/assets/images/objects.png')",
          web6_gif: "url('../src/assets/images/objects_gif.gif')",
          web7: "url('../src/assets/images/house.png')",
          web7_gif: "url('../src/assets/images/house_gif.gif')",
          web8: "url('../src/assets/images/asphalt.png')",
          web8_gif: "url('../src/assets/images/asphalt_gif.gif')",
          grass: "url('../src/assets/images/grass.png')",
          grass_gif: "url('../src/assets/images/grass.gif')",
        },
        fontFamily: {
          burtons: "burtons",
        },
        colors: {
          blue_gradient: "#005AA7",
          yellow_gradient: "#FFFDE4",
          custom_dark: "#32363c",
          custom_nav: "#36323c",
          dark_sky_blue: "#25324b",
          water_blue: "#1b2439",
          light_background: "#ded7d3",
          light_background_0: "#acaaa8",
          twitter_blue: "#36D8FF",
          twitter_medium_blue: "#00ACEE",
          linkdin_blue: "#0077b5",
          linkdin_to_blue: "#00a0dc",
          insta_blue: "#4f5bd5",
          insta_purple: "#d62976",
          insta_yellow: "#feda75",
          grad1: "#2C3E50",
          grad2: "#000000",
          android: "#83b74a",
          html: "#dd4a24",
          js: "#e8d24c",
          tailwind: "#1bc1b0",
          orange: "#e8a87c",
          purple: "#c38d9e",
          cool_blue: "#55bcc9",
        },
        screens: {
          s1: "366px",
          sm: "480px",
          l: "860px",
          md2: "910px",
          mxl: "1500px",
          _3xl: "1986px",
        },
      },
    },
    plugins: ["./node_modules/flowbite/plugin"],
  };
  