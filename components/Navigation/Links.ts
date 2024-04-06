import type { Link } from "./LinksTypes";

const links: Link[] = [
  {
    name: "Math",
    mainLink: "math",
    submenu: true,
    sublink: [
      {
        head: "Linear Equations",
        mySubLinks: [
          {
            name: "Perpendicular Equation",
            link: "/math/perpendicular",
          },
          {
            name: "Parallel Equation",
            link: "/math/parallel",
          },
          {
            name: "Two points Solver",
            link: "/math/twopoints",
          },
        ],
      },
    ],
  },
  {
    name: "Physics",
    mainLink: "phy",
    submenu: true,
    sublink: [
      {
        head: "Units",
        mySubLinks: [
          {
            name: "Units converter",
            link: "/phy/unit",
          }
        ],
      },
    ],
  },
  {
    name: "Statistics",
    mainLink: "stats",
    submenu: true,
    sublink: [
      {
        head: "Data",
        mySubLinks: [
          {
            name: "Mean",
            link: "/stats/mean",
          }
        ],
      },
    ],
  },
];

export default links;
