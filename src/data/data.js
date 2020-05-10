import XoranConnect from '../assets/Images/App/XoranConnect.png';
import Beo from '../assets/Images/App/BeoControlApp.png';
import Marvel from '../assets/Images/App/MarvelApp.png';

//Websites import
import Aca from '../assets/Images/Web/AcaLukas.png';
import BeoC from '../assets/Images/Web/BeoC.png';
import CodeS from '../assets/Images/Web/CodeSymphonyLaptop.png';
import Dijeta from '../assets/Images/Web/DijetaRecepti.png';
import Exal from '../assets/Images/Web/Exal.png';
import Fit from '../assets/Images/Web/FitKutak.png';
import Izostop from '../assets/Images/Web/Izostop.png';
import Pinokio from '../assets/Images/Web/Pinokio.png';
import Sis from '../assets/Images/Web/SisCevap.png';
import Smrsaj from '../assets/Images/Web/SmrsajBrzo.png';
import Valuh from '../assets/Images/Web/Valuh.png';
import VetCAT from '../assets/Images/Web/VetCAT.png';
import Xoran from '../assets/Images/Web/XoranTech.png';
import Xoran2 from '../assets/Images/Web/XoranTech2.png';

export const MENU_ITEMS = [
  {
    text: 'Home',
    ex: true,
    to: '',
  },
  {
    text: 'About me',
    ex: false,
    to: 'about',
  },
  {
    text: ' Portfolio',
    ex: false,
    to: 'portfolio',
  },
  {
    text: 'Contact',
    ex: false,
    to: 'contact',
  },
];

export const WORK_ITEM = [
  {
    title: 'Lead Front-End Developer',
    company: 'Raking',
    year: '2018-present',
    desc:
      '• Developed and maintained computed tomography ( CT Scan ) web application for a fully functional online viewer \n • Frontend architecture using React(Hooks) / Redux / RESTful APIs \n • Created custom UI components using CSS Modules \n • Created official Xoran Technologies and VetCAT website ( 70,000+ unique visitors per month ) with a focus on performance, and accessibility \n • Communication and collaboration with multi-disciplinary teams of engineers, designers, producers, and stakeholders on a daily basis',
    iconStack: 1,
    reverse: false,
  },
  {
    title: 'Front-End Developer',
    company: 'BeoControl Group',
    year: '2017-2018',
    desc:
      '• Developed and shipped highly interactive Truck Tracking web application using React/Redux/ Styled Components \n • Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, Next.js, JavaScript, and WordPress \n • Writing modern, performant, maintainable code for a diverse array of client and internal projects \n • Tested sites in various browsers and devices to ensure cross-browser compatibility and mobile responsiveness',

    iconStack: 2,
    reverse: true,
  },
  {
    title: 'Web Developer',
    company: 'AskGamblers',
    year: '2015-2017',
    desc:
      '• Engineered and maintained major features of AskGamblers customer-facing web app using JavaScript ES6, jQuery, Backbone.js and CSS \n • Collaborated with a team of designers to spearhead a new brand and design system for AskGamblers Eastern Europe affiliate program. \n • Clarified and communicate project goals by creating personas, use-cases content plans and information architecture, wireframes, and prototypes',
    iconStack: 3,
    reverse: false,
  },
];

export const EDU_ITEM = [
  {
    title: `Master's Degree`,
    company: 'Faculty of Organizational Sciences (FON)',
    year: '2015-2015',
    desc: 'Department : Information technology and electronic business',
    // iconStack: 3,
    hideStack: true,
    reverse: false,
  },
  {
    title: `Bachelor Degree`,
    company: 'Faculty of  Information Technology (Alfa)',
    year: '2010-2014',
    desc: 'Department : Information technology',
    // iconStack: 3,
    hideStack: true,
    reverse: true,
  },
];

export const APP_ITEM = [
  {
    title: 'XoranConnect',
    desc:
      'XoranConnect is a compliant web-based application and provides online scans viewing, off-site archival and backup of images, and easy access for both physician and patient.',
    image: XoranConnect,
    displayLink: false,
    reverse: false,
  },
  {
    title: 'BeoTracker',
    desc:
      'BeoTracker is  real-time tracking application by GPS based solutions.',
    image: Beo,
    displayLink: false,
    reverse: true,
  },
  {
    title: 'Marvel Superhero Search',
    desc: `You don't know the height of Ant-Man or  RGB of Hulks green skin? Then, this is an app for you. Marvel Superhero Search App in greatest form.`,
    image: Marvel,
    displayLink: true,
    workLink: 'https://marvel-hero-search.web.app/',
    reverse: false,
  },
];

export const WEBSITE_ITEM = [
  {
    title: 'Aca Lukas | Official Website',
    desc:
      'The official website for Serbian pop-folk singer Aleksandar Vuksanović, better known by his stage name Aca Lukas.',
    image: Aca,
    displayLink: true,
    workLink: 'https://acalukas.rs/',
    reverse: false,
    showColorBox: true,
    colors: ['#fff', '#dfa572', 'black', '#d5d5d5', '#f98928', '#00000091'],
    fontFam: 'Poppins',
  },

  {
    title: 'Xoran Technologies',
    desc:
      'Xoran Technologies is the pioneer and market leader in low-dose radiation, cone beam CT scanner systems specifically designed for the patient point-of-care.',
    image: Xoran,
    displayLink: true,
    workLink: 'https://xorantech.com/',
    reverse: true,
    showColorBox: true,
    colors: ['#fff', '#2bbed8', 'black', '#d5d5d5', '#1579ba', '#00000091'],
    fontFam: 'Raleway',
  },

  {
    title: 'CodeSymphony',
    desc: 'CodeSymphony is a leading web design agency based in Belgrade.',
    image: CodeS,
    displayLink: true,
    workLink: 'https://codesymphony.io/',
    reverse: false,
    showColorBox: true,
    colors: ['#fff', '#f6cde1', '#974f8d', '#eee8e8', '#d99ab8', '#632f5c'],
    fontFam: 'Open Sans',
  },
  {
    title: 'Valuh',
    desc:
      ' Serbian largest shop for plastic storage containers, both for home and business use.',
    image: Valuh,
    displayLink: true,
    workLink: 'https://valuh.rs/',
    reverse: true,
    showColorBox: true,
    colors: ['#fff', '#a8e4d8', '#121212', '#e6e6e6', '#0cc45c', '#1a1a1a'],
    fontFam: 'Montserrat',
  },
];

export const LINK_ITEM = [
  {
    id: 0,
    name: 'VetCAT',
  },
  {
    id: 1,
    name: 'Izostop',
  },
  {
    id: 2,
    name: 'Exal',
  },

  {
    id: 3,
    name: 'BeoControl',
  },

  {
    id: 4,
    name: 'Dijeta recepti',
  },

  {
    id: 5,
    name: 'Smrsaj brzo',
  },

  {
    id: 6,
    name: 'Fit kutak',
  },
  {
    id: 7,
    name: 'Pinokio',
  },
  {
    id: 8,
    name: 'Šiš ćevap',
  },
];

export const WEB_ITEM = [
  {
    id: 0,
    name: 'VetCAT',
    img: VetCAT,
    link: 'https://vetcat.com/',
  },
  {
    id: 1,
    name: 'Izostop',
    img: Izostop,
    link: 'http://izolacijaipodovi.rs/',
  },
  {
    id: 2,
    name: 'Exal',
    img: Exal,
    link: 'https://exaltech.rs/',
  },

  {
    id: 3,
    name: 'BeoControl',
    img: BeoC,
    link: 'https://beocontrol-group.com/',
  },

  {
    id: 4,
    name: 'Dijeta recepti',
    img: Dijeta,
    link: 'https://dijetarecepti.rs/',
  },

  {
    id: 5,
    name: 'Smrsaj brzo',
    img: Smrsaj,
    link: 'https://smrsajbrzo.rs/',
  },

  {
    id: 6,
    name: 'Fit kutak',
    img: Fit,
    link: 'https://fitkutak.rs/',
  },
  {
    id: 7,
    name: 'Pinokio',
    img: Pinokio,
    link: 'https://pinokio-palacinke.rs/',
  },
  {
    id: 8,
    name: 'Šiš ćevap',
    img: Sis,
    link: 'https://siscevap.rs/',
  },
];
