import serviceFive from "../assets/services/serviceFive.svg";
import serviceFour from "../assets/services/serviceFour.svg";
import serviceOne from "../assets/services/serviceOne.svg";
import serviceSix from "../assets/services/serviceSix.svg";
import serviceThree from "../assets/services/serviceThree.svg";
import serviceTwo from "../assets/services/serviceTwo.svg";

export type ServiceSurface = "default" | "primary" | "secondary";

/** Fundo do “grifo” do título: primary = verde, white = branco; texto sempre secondary (preto) */
export type ServiceTitleHighlight = "primary" | "white";

export type ServiceItem = {
  line1: string;
  line2: string;
  surface: ServiceSurface;
  titleHighlight: ServiceTitleHighlight;
  image: string;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    line1: "Search engine",
    line2: "optimization",
    surface: "default",
    titleHighlight: "primary",
    image: serviceOne,
  },
  {
    line1: "Pay-per-click",
    line2: "advertising",
    surface: "primary",
    titleHighlight: "white",
    image: serviceTwo,
  },
  {
    line1: "Social Media",
    line2: "Marketing",
    surface: "secondary",
    titleHighlight: "white",
    image: serviceThree,
  },
  {
    line1: "Email",
    line2: "Marketing",
    surface: "default",
    titleHighlight: "primary",
    image: serviceFour,
  },
  {
    line1: "Content",
    line2: "Creation",
    surface: "primary",
    titleHighlight: "white",
    image: serviceFive,
  },
  {
    line1: "Analytics and",
    line2: "Tracking",
    surface: "secondary",
    titleHighlight: "primary",
    image: serviceSix,
  },
];
