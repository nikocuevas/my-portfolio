import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiApachejmeter,
  SiPostman,
  SiApple,
  SiWindows,
  SiEclipseide,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiApple style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>macOS</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiWindows style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Windows</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiVisualstudiocode style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>VSCode</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiEclipseide style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Eclipse IDE</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiApachejmeter style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>JMeter</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiPostman style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Postman</span>
      </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
