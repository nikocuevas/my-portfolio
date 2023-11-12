import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiNpm,
  DiJava,
  DiMongodb,
} from "react-icons/di";
import {
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <DiJavascript1 style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>JavaScript</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <DiNodejs style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>NodeJS</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <DiNpm style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>NPM</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <DiJava style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Java</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiMysql style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>MySQL</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <DiMongodb style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>MongoDB</span>
      </div>
      </Col>

    </Row>
  );
}

export default Techstack;
