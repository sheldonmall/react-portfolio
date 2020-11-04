import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (
    <Nav activeKey="/home" className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/project">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTabs;
