const animation = {
  animate: true,
  duration: 750,
  once: true,
};
const header = {
  name: "Rajiv",
};
const background = {
  type: "Particle",
};
const section2title = "About Me";
const about = [
  {
    paragraph:
      "I am a backend developer and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting.",
  },
  {
    paragraph:
      "On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end and Back-end Development Tools.",
  },
  {
    paragraph:
      " I also have the ability to work independently while staying on schedule and meeting those tight deadlines despite staying in close contact with my friends.",
  },
  { paragraph: "Below is a list of my current technical skills:" },
];

const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "NPM",
    faClass: "fab fa-npm",
  },
  {
    name: "Heroku",
    faClass: "fas fa-h-square",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
];

const section3Title = "Past Projects";
const projects = [
  {
    id: "project1",
    name: "Blog Page",
    skills: ["HTML, CSS, JS, Ejs, Node"],
    url: "https://blog-page-by-rajiv.herokuapp.com/",
  },
  {
    id: "project2",
    name: "Portfolio Page",
    skills: ["HTML, CSS, JS,Node,React"],
    url: "https://rajivharlalka.netlify.app",
  },
];
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    id: "misc1",
    name: "Email feedback System",
    url: "https://github.com/rajivharlalka/Feedback",
  },
];
const section5Title = "Get in Touch";
const contact = {
  pitch: "I am a bit Talkative, would love to hear from you too 😉",
  copyright: "Rajiv Harlalka",
  contactUrl: "rajivharlalka009@gmail.com",
};

const social = {
  github: "https://github.com/rajivharlalka",
  facebook: "https://www.facebook.com/rajiv.harlalka.7/",
  linkedin: "https://www.linkedin.com/in/rajivharlalka009/",
  instagram: "https://www.instagram.com/rajiv_harlalka/",
  resume: "https://drive.google.com/file/d/1VWgD2jnZGYlVhc_jo2gCxJnnqSvucZnE/view?usp=sharing",
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
