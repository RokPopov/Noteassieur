import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <>
      <Row
        style={{
          color: "#000",
          textDecoration: "underline",
          fontVariant: "small-caps",
          fontWeight: "lighter",
        }}
      >
        <Col
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginTop: "3rem",
            }}
          >
            ©2020
          </p>
          <p>
            Created as a Codaisseur Group Project by:
            <p>
              <a
                href="https://www.linkedin.com/in/bartkuijper/"
                target="_blank"
                style={{
                  color: "#686868",
                }}
              >
                Bart Kuijper
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/alilotfi1/"
                target="_blank"
                style={{
                  color: "#686868",
                }}
              >
                Ali Lotfi
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/rok-popov-ledinski-899154199/"
                target="_blank"
                style={{
                  color: "#686868",
                }}
              >
                Rok Popov Ledinski
              </a>
            </p>
          </p>
        </Col>
      </Row>
      <Row
        className="justify-content-center"
        style={{
          backgroundColor: "#fff",
        }}
      ></Row>
    </>
  );
}
