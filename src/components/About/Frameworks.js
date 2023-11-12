import React from "react";
import { Col, Row} from "react-bootstrap";
import {
  SiCodeceptjs,
  SiPlaywright,
  SiSelenium,
  SiWebdriverio,
  SiCucumber,
} from "react-icons/si";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiCodeceptjs style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>CodeceptJS</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiPlaywright style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Playwright</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiSelenium style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Selenium</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiWebdriverio style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>WebdriverIO</span>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiCucumber style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Cucumber</span>
      </div>
      </Col>
    </Row>
  );
}

export default Frameworks;
