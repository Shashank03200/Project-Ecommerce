import Christiano from "../assets/images/christiano.jpg";
import Iker from "../assets/images/ikercasillas.jpg";
import James from "../assets/images/james.jpg";
import Toni from "../assets/images/tonikroos.jpg";
import Zidane from "../assets/images/zidane.jpg";

import {
  BehanceIcon,
  DribbleIcon,
  FBIcon,
  LinkedInIcon,
  MediumIcon,
} from "./icons";

export const team = [
  {
    name: "Zidane",
    position: "Leadership & management",
    photo: Zidane,
    socialLinks: [
      { icon: LinkedInIcon, url: "" },
      { icon: MediumIcon, url: "" },
      { icon: FBIcon, url: "" },
    ],
  },
  {
    name: "Toni Kroos",
    position: "Product Developer",
    photo: Toni,
    socialLinks: [
      { icon: LinkedInIcon, url: "" },
      { icon: MediumIcon, url: "" },
    ],
  },
  {
    name: "Iker Casillas",
    position: "Marketing Strategy",
    photo: Iker,
    socialLinks: [{ icon: MediumIcon, url: "" }],
  },
  {
    name: "James",
    position: "Product designer",
    photo: James,
    socialLinks: [
      { icon: MediumIcon, url: "" },
      { icon: DribbleIcon, url: "" },
      { icon: BehanceIcon, url: "" },
    ],
  },
  {
    name: "Christiano",
    position: "Financial operations",
    photo: Christiano,
    socialLinks: [
      {
        icon: LinkedInIcon,
        url: "",
      },
      {
        icon: FBIcon,
        url: "",
      },
    ],
  },
];
