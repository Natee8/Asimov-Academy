import serviceFive from "../assets/services/serviceFive.svg";
import serviceFour from "../assets/services/serviceFour.svg";
import serviceOne from "../assets/services/serviceOne.svg";
import serviceSix from "../assets/services/serviceSix.svg";
import serviceThree from "../assets/services/serviceThree.svg";
import serviceTwo from "../assets/services/serviceTwo.svg";

export type ServiceCardVariant = "grey" | "lime" | "dark";

export type ServiceItem = {
  line1: string;
  line2: string;
  variant: ServiceCardVariant;
  image: string;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    line1: "Search engine",
    line2: "optimization",
    variant: "grey",
    image: serviceOne,
  },
  {
    line1: "Pay-per-click",
    line2: "advertising",
    variant: "dark",
    image: serviceTwo,
  },
  {
    line1: "Social Media",
    line2: "Marketing",
    variant: "grey",
    image: serviceThree,
  },
  {
    line1: "Email",
    line2: "Marketing",
    variant: "lime",
    image: serviceFour,
  },
  {
    line1: "Content",
    line2: "Creation",
    variant: "grey",
    image: serviceFive,
  },
  {
    line1: "Analytics and",
    line2: "Tracking",
    variant: "lime",
    image: serviceSix,
  },
];
