import type { Link } from "./LinksTypes";

const links: Link[] = [
  {
    name: "Math",
    submenu: true,
    sublink: [
      {
        head: "Matrix",
        mySubLinks: [
          {
            name: "Matrix",
            link: "/Math/Matrix",
          },
          {
            name: "Matrix Determinant",
            link: "/Math/Determinant",
          },
        ],
      },
      {
        head: "Trigonometry",
        mySubLinks: [
          {
            name: "Triange Solver",
            link: "/Math/Triangle",
          },
        ],
      },
    ],
  },
  {
    name: "Physics",
    submenu: true,
    sublink: [
      {
        head: "Physics22",
        mySubLinks: [
          {
            name: "Free Fall",
            link: "/Phy/call",
          },
          {
            name: "Motion",
            link: "/Phy/cotion",
          },
          {
            name: "Coefficient",
            link: "/Phy/coefficient",
          },
        ],
      },
    ],
  },
  {
    name: "Statistics",
    submenu: true,
    sublink: [
      {
        head: "Statistics33",
        mySubLinks: [
          {
            name: "Mean",
            link: "/Math/mean",
          },
          {
            name: "Geometric Mean",
            link: "/Math/geomean",
          },
          {
            name: "Standard Deviation",
            link: "/Math/std",
          },
        ],
      },
    ],
  },
];

export default links;
