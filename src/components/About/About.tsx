import "./About.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  faCss,
  faHtml5,
  faJava,
  faPython,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [showHint, setShowHint] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-area">
          <h1>
            <AnimatedLetters
              letterClass={`highlighted ${letterClass}`}
              strArray={"about me".split("")}
              idx={12}
            />
          </h1>

          <p>
            I'm a <span className="highlighted-2">CS + Co-op student</span> at
            the University of Waterloo. I've been all over the SWE stack, and
            have experience in SRE and ML. Feel free to check out my{" "}
            <Link to="/projects">projects</Link>, or scroll down for my
            professional experience :)
          </p>
          <p>
            More interestingly, I'm an absolute puzzle fiend. Be it{" "}
            <span className="highlighted-2">minesweeper</span>,{" "}
            <span className="highlighted-2">crosswords</span>, or{" "}
            <span className="highlighted-2">
              90's point and click adventure games
            </span>{" "}
            (LucasArts especially), if I'm not coding, I've got my head buried
            in one of these.
          </p>
          <p>
            Recently, I've been obsessed with{" "}
            <a href="https://www.minutecryptic.com/" target="blank">
              cryptic crossword
            </a>{" "}
            clues. Here's one for you:
          </p>
          <p>
            <i>Ghost hunter spaceman lost: southeast? (3, 3) </i>
            <span
              className="highlighted-2"
              onClick={() => setShowHint(!showHint)}
              style={{ cursor: "pointer" }}
            >
              Need a hint?
            </span>
            {showHint && (
              <>
                <br />
                Refresh the page. What do you see? Think you've solved it?{" "}
                <Link to="/contact">Let me know :)</Link>
              </>
            )}
          </p>
          <p>
            Also! I draw! <Link to="/design">Take a peek at my art!</Link>
          </p>
          <h2>what i've been up to:</h2>
          <ul>
            <li>
              Currently working with{" "}
              <span className="highlighted-2">Shopify</span> and supporting
              their migration to a distributed database!
            </li>
            <li>
              I love partaking in tech fellowships - just wrapped up a 12-week
              stint as a Production Engineering Fellow at{" "}
              <span className="highlighted-2">Meta</span>, and before that, was
              an ML fellow at{" "}
              <span className="highlighted-2">AI4Good Lab 2026</span>.
            </li>
            <li>
              I was a frontend organizer for{" "}
              <a
                href="https://hackthenorth.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hack the North
              </a>{" "}
              2026 (See us on{" "}
              <a
                href="https://www.awwwards.com/sites/hack-the-north"
                target="_blank"
                rel="noopener noreferrer"
              >
                awwwards
              </a>{" "}
              hehe)
            </li>
            <li>
              From Oct 2025 - June 2026, completed a{" "}
              <span className="highlighted-2">Ubisoft mentorship</span>, where I
              developed a C++ game under industry leadership.
            </li>
            <li>
              I also served as Waterloo's{" "}
              <span className="highlighted-2">
                Campus Crusade for Cheese president
              </span>
              . I have thenceforth committed myself to sampling one new cheese
              every week. Saint Albray's is a recent favourite.
            </li>
            <li>
              From May - December 2025, I completed a software internship at{" "}
              <span className="highlighted-2">Oak Ridges Heart Centre</span>,
              where I developed an{" "}
              <span className="highlighted-2">AI clinic scribe</span>, a{" "}
              <span className="highlighted-2">food portion size model</span>,
              and a <span className="highlighted-2">mobile app</span>, amongst
              other things.
            </li>
          </ul>
        </div>
        <div className="stage-cube">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="indianred" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="gold" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="lightsalmon" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss} color="dodgerblue" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSquareJs} color="Khaki" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="deepskyblue" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default About;
