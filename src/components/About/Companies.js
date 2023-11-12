import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAccenture,
} from "react-icons/si";

function Companies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAccenture />
      </Col>
    </Row>
  );
}

export default Companies;
