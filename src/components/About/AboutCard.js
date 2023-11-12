import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kyle Niko Cuevas </span>
            from <span className="purple"> Manila, Philippines</span>
            <br />
            <br /> <span className="img" role="img" >
                  🧑🏻‍💻
                </span> I am a Software QA Automation Professional specializing 
            in ensuring quality through designing, implementing, and maintaining 
            automated testing processes with proficiency in various tools and frameworks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <span className="img" role="img" >
                  🎮
              </span> Playing Games
            </li>
            <li className="about-activity">
              <span className="img" role="img" >
                  ✈️
              </span> Travelling
            </li>
            <li className="about-activity">
              <span className="img" role="img" >
                  🎬
              </span> Watching Movies
            </li>
            <li className="about-activity">
              <span className="img" role="img" >
                  🎧
              </span> Listening to Music
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "I break things for a living, and then I fix them – call me a digital superhero."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
