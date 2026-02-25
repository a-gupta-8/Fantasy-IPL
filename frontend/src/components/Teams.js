import cskLogo from "../../public/CSK_Logo.avif";
import miLogo from "../../public/MI_Logo.avif";
import rcbLogo from "../../public/RCB_Logo.avif";
import kkrLogo from "../../public/KKR_Logo.avif";
import dcLogo from "../../public/DC_Logo.avif";
import rrPinkLogo from "../../public/RRPink_Logo.png";
import rrWhiteLogo from "../../public/RRWhite_Logo.webp";
import srhLogo from "../../public/SRH_Logo.avif";
import pbksLogo from "../../public/PBKS_Logo.avif";
import lsgLogo from "../../public/LSG_Logo.avif";
import gtLogo from "../../public/GT_Logo.avif";

export const teams = {
  "Chennai Super Kings": {
    name: "CSK",
    logo: cskLogo,
    colorCode: "#FDCD04"
  },
  "Mumbai Indians": {
    name: "MI",
    logo: miLogo,
    colorCode: "#01589F"
  },
  "Royal Challengers Bengaluru": {
    name: "RCB",
    logo: rcbLogo,
    colorCode: "#D42630"
  },
  "Kolkata Knight Riders": {
    name: "KKR",
    logo: kkrLogo,
    colorCode: "#46007C"
  },
  "Delhi Capitals": {
    name: "DC",
    logo: dcLogo,
    colorCode: "#11579F"
  },
  "Rajasthan Royals": {
    name: "RR",
    logo: [rrPinkLogo, rrWhiteLogo],
    colorCode: "#EA1B85"
  },
  "Sunrisers Hyderabad": {
    name: "SRH",
    logo: srhLogo,
    colorCode: "#FF6606"
  },
  "Punjab Kings": {
    name: "PBKS",
    logo: pbksLogo,
    colorCode: "#E31C1F"
  },
  "Lucknow Super Giants": {
    name: "LSG",
    logo: lsgLogo,
    colorCode: "#F2F2F7"
  },
  "Gujarat Titans": {
    name: "GT",
    logo: gtLogo,
    colorCode: "#002247"
  }
};