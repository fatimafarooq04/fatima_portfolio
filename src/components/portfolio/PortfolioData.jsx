export const PortfolioData = [
  {
    id: 1,
    img: [
      { type: 'video', src: '/images/Portfolio/AgeCalculatorVideo.mp4' },
      { type: 'image', src: '/images/Portfolio/AgeCalculator1.PNG' },
      { type: 'image', src: '/images/Portfolio/AgeCalculator2.PNG' },
    ],
    title: "Age Calculator",
    desc: "A simple and responsive Age Calculator that lets users calculate their age in years, months, and days based on the input birth date. Designed with a clean UI and real-time validation.",
    languages: 'HTML, CSS, JavaScript',
    tabName: 'Website',
    Link: 'https://fatimafarooq04.github.io/Age-calculator-Javascript/'
  },
  {
    id: 2,
    img: [
      { type: 'video', src: '/images/Portfolio/dragableCardsVideo.mp4' },
      { type: 'image', src: '/images/Portfolio/dragableCards1.PNG' },
      { type: 'image', src: '/images/Portfolio/dragableCards2.PNG' },
    ],
    title: "Draggable Cards",
    desc: "An interactive web app built in React.js that features a draggable card UI. Users can click and drag cards to reorder or interact with the layout dynamically.",
    languages: 'React.js, CSS, Tailwind, Framer Motion',
    tabName: 'Website',
    Link: 'https://draggable-cards-react.vercel.app/'
  },
  {
    id: 3,
    img: [
      { type: 'video', src: '/images/Portfolio/SidcupVideo.mp4' },
      { type: 'image', src: '/images/Portfolio/Sidcup1.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup2.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup3.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup4.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup5.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup6.PNG' },
      { type: 'image', src: '/images/Portfolio/Sidcup7.PNG' },
    ],
    title: "Sidcup Website Clone",
    desc: "A front-end clone of the modern Sidcup family golf website featuring scroll animations, responsive design, hover effects, and clean layout. Recreated using vanilla JavaScript and CSS animations.",
    languages: 'HTML, CSS, JavaScript, GSAP',
    tabName: 'Website',
    Link: 'https://fatimafarooq04.github.io/sidcup-frontend/'
  },
 {
  id: 4,
  img: [
    { type: 'video', src: '/images/Portfolio/WeatherVideo.mp4' },
    { type: 'image', src: '/images/Portfolio/Weather1.png' },
    { type: 'image', src: '/images/Portfolio/Weather2.png' },
  
  ],
  title: "Weather App",
  desc: "A real-time weather forecasting application built using React and integrated with OpenWeatherMap API. Users can search any city to get live weather data including temperature, humidity, wind speed, and weather conditions. The UI is clean, responsive, and user-friendly.",
  languages: 'React.js, REST API, CSS',
  tabName: 'Website',
  Link: 'https://weather-app-react-beta-seven.vercel.app/'
}

].sort((a, b) => b.id - a.id);
