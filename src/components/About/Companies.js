import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAccenture,
} from "react-icons/si";

function Companies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div style={{ textAlign: 'center' }}>
        <SiAccenture style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '15px', display: 'block' }}>Accenture</span>
      </div>
      </Col>
    </Row>
  );
}

export default Companies;
