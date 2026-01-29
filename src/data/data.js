const xs = "(max-width:640px)";
const md = "(max-width:768px)";

export const data = [
  {
    id: "cashier",
    category: "featured",
    title: "Basic Cashier",
    tags: ["Advanced JavaScript", "DOM Manipulation"],
    description:
      "A basic web app built using vanilla HTML, CSS, and JavaScript. Created for a sibling of a friend's school project, this was my first hands-on exploration of how JavaScript can drive web app behavior through features like UI filtering and a simple cashier calculator.",
    imgAlt:
      'Picture of the Basic Cashier webapp Screenshot with on a green background and an additional context subtitle of "Interactive Static Page"',
    images: [
      {
        size: "xs",
        url: "/cashier-xs.jpg",
        media: xs,
      },
      {
        size: "md",
        url: "/cashier-md.jpg",
        media: md,
      },
      {
        size: "lg",
        url: "/cashier-lg.jpg",
      },
    ],
    url: "https://kath-basic-cashier.vercel.app/",
    caseStudy: [
      {
        title: "Something",
        haeding: "h2",
        contents: ["p", ""],
      },
    ],
  },
  {
    id: "bitendo",
    category: "other",
    title: "Bitendo",
    tags: ["Advanced JavaScript", "DOM Manipulation", "Sass"],
    description:
      "A parody imitation of Nintendo Switch's store page that toes the line between a static and a dynamic app. This is a practice project that is focused on exploring how Advanced JavaScript and DOM manipulation can really bring a web app to life. The carousel, like button, cards, and accordions are all interactive.",
    imgAlt:
      'Picture of Bitendo Screenshot with on a green background and an additional context subtitle of "Interactive Static Page"',
    images: [
      {
        size: "xs",
        url: "/bitendo-xs.jpg",
        media: xs,
      },
      {
        size: "md",
        url: "/bitendo-md.jpg",
        media: md,
      },
      {
        size: "lg",
        url: "/bitendo-lg.jpg",
      },
    ],
    url: "https://kath-basic-cashier.vercel.app/",
  },
];
