import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Verma </span>
            from <span className="purple">Meerut, India.</span>
            <br />
            I am currently a B.Tech 3rd year Student at
            <br />
            Delhi Technological University, Delhi.
            <br />
            <br />I do love to Collaborate with people and work on projects.
            <br />
            Apart from coding i do love to-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight />& Solo Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
