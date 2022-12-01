import Image1 from "../../assets/img/portfolio/seatours.png";
import Image2 from "../../assets/img/portfolio/sportsbibs.png";
import Image3 from "../../assets/img/portfolio/mebleloco.png";
import Image4 from "../../assets/img/portfolio/dobrywzrok.png";
import Image5 from "../../assets/img/portfolio/baltiki.png";


const PortfolioData = [
  {
    id: 1,
    type: "wordpress",
    image: Image1,
    tag: ["wordpress"],
    delayAnimation: "0",
    link: "https://seatours.pl/",
    modalDetails: [
      {
        project: "WordPress Theme",
        client: "SeaTours",
        language: "Underscore + ACF",
        preview: "seatours.pl",
        link: "https://seatours.pl/",
      },
    ],
  },
  {
    id: 2,
    type: "prestashop",
    image: Image2,
    tag: ["prestashop"],
    delayAnimation: "100",
    link: "https://sportsbibs.pl",
    modalDetails: [
      {
        project: "PrestaShop",
        client: "SportsBibs",
        language: "PHP + CSS + JS",
        preview: "sportsbibs.pl",
        link: "https://sportsbibs.pl",
      },
    ],
  },
  {
    id: 3,
    type: "prestashop",
    image: Image3,
    tag: ["prestashop"],
    delayAnimation: "200",
    link: "https://szafkanabuty.pl",
    modalDetails: [
      {
        project: "PrestaShop",
        client: "Meble Loco",
        language: "HTML, CSS, Javascript",
        preview: "szafkanabuty.pl",
        link: "https://szafkanabuty.pl",
      },
    ],
  },
  {
    id: 4,
    type: "wordpress",
    image: Image4,
    tag: ["wordpress"],
    delayAnimation: "0",
    link: "https://dobrywzrok.pl",
    modalDetails: [
      {
        project: "WordPress",
        client: "DobryWzrok",
        language: "HTML, CSS, Javascript",
        preview: "dobrywzrok.pl",
        link: "https://dobrywzrok.pl",
      },
    ],
  },
  {
    id: 5,
    type: "wordpress",
    image: Image5,
    tag: ["wordpress"],
    delayAnimation: "100",
    link: "https://dobrywzrok.pl",
    modalDetails: [
      {
        project: "WordPress",
        client: "Baltiki",
        language: "HTML, CSS, Javascript",
        preview: "baltiki.pl",
        link: "https://dobrywzrok.pl",
      },
    ],
  },
];

export default PortfolioData;
