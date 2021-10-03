import italy from "../asset/italy.jpg";
import maldive from "../asset/maldive.jpg";

const category = [
  {
    icon: "fas fa-map-marked-alt",
    title: "Places",
  },
  {
    icon: "fas fa-plane",
    title: "Flight",
  },
  {
    icon: "fas fa-hotel",
    title: "Hotels",
  },
  {
    icon: "fas fa-pizza-slice",
    title: "Foods",
  },
];
const footer = [
  {
    icon: "fas fa-home",
    title: "Home",
  },
  {
    icon: "far fa-comment-dots",
    title: "Message",
  },
  {
    icon: "fas fa-plus",
    title: "Plus",
  },
  {
    icon: "fas fa-heart",
    title: "Like",
  },
  {
    icon: "fas fa-user",
    title: "Profile",
  },
];

const country = [
  {
    path: italy,
    name: "italy",
    capital: 'rome'
  },
  {
    path: maldive,
    name: "maldive",
    capital: 'Malé'
  },
];
const data = [country, category, footer];
export default data;
