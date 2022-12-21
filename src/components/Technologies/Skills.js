import { DiTerminal } from "react-icons/di";
import { SiFirebase, SiGit } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaTrello,
  FaFigma,
  FaSlack,
} from "react-icons/fa";
export const Skills = [
  {
    slug: "css3",
    Component: FaCss3Alt,
    title: "CSS3",
    Description: () => (
      <>I have used CSS3 for structuring, styling, and formatting web pages.</>
    ),
  },
  {
    slug: "html",
    Component: FaHtml5,
    title: "HTML5",
    Description: () => (
      <>
        I have used HTML5 for building the structure of the website by compiling
        CSS, JavaScript, images, and other resources that make up the
        application and cache them locally.
      </>
    ),
  },
  {
    slug: "react",
    Component: FaReact,
    title: "ReactJS",
    Description: () => (
      <>
        I have worked with ReactJS and build interactive user interfaces and web
        applications quickly and efficiently with significantly less code than
        you would with vanilla JavaScript.
      </>
    ),
  },
  {
    slug: "wordpress",
    Component: FaWordpress,
    title: "WordPress",
    Description: () => <>I have build several (CMS) using Wordpress. </>,
  },
  {
    slug: "trello",
    Component: FaTrello,
    title: "Trello",
    Description: () => (
      <>
        Used Trello on daily basis to plan and manage any type of project,
        workflow, or task tracking.
      </>
    ),
  },
  {
    slug: "slack",
    Component: FaSlack,
    title: "Slack",
    Description: () => (
      <>
        Used Slack on daily basis to communicate with our clients and to
        connects with the team.
      </>
    ),
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => (
      <>I have written dozens of Shell scripts for various purposes.</>
    ),
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
