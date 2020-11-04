import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import mypic from "./Sheldon-2020-1.jpeg";

function Contact() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div
              class="card-body"
              style={{ fontStyle: "regular", fontWweight: "bold" }}
            >
              CONTACT ME
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" style={{ marginTop: "1rem" }}>
          <img
            class="my-pic"
            img
            src={mypic}
            alt="Sheldon"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div class="col-lg-6" style={{ marginTop: "1rem" }}>
          <h2>Here are my social coordinates to contact me.</h2>
            <ul>
              <li>
                <span class="email">
                  <i class="fa fa-envelope-o"></i> sheldoniznow@gmail.com
                </span>
              </li>
              <li>
                <i class="fa fa-github" aria-hidden="true"></i>{" "}
                <a href="https://sheldonmall.github.io" target="_blank">
                  github.com/sheldonmall
                </a>
              </li>
              <li>
              <i class="fa fa-linkedin-square"></i>{" "}
                <a
                  href="https://www.linkedin.com/in/sheldonmall"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
              <i class="fa fa-phone" aria-hidden="true"></i>{" "}416-436-6083
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Contact;
