import React from "react";
import mypic from "./Sheldon-2020-1.jpeg";

export default function About() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div
              class="card-body"
              style={{ fontStyle: "regular", fontWweight: "bold" }}
            >
              ABOUT ME
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" style={{ marginTop: "1rem" }}>
          <img
            class="my-pic"
            img
            src={mypic}
            alt="Sheldon"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div class="col-lg-8" style={{ marginTop: "1rem" }}>
          <h2>This is my story</h2>
          <p>
            I started my professional career training students and professionals
            on technologies like COBOL, dBase III and systems analysis & design.{" "}
            <br></br>I then had the opportunity to deliver training on UNIX & C
            programming, awk, Sybase, SQL and DB Libraries. I also adminstered
            the UNIX system for a while.<br></br>
            My career then gradually transitioned into applications development
            & implementation where I not only gathered and analyzed system
            requirements, but also took care of training, implementation and
            post-launch support to users.<br></br>
            Since then, I have several successful application implementations to
            my credit in diverse industries that have helped me have a broad
            understanding of different systems.
          </p>
        </div>
      </div>
    </div>
  );
}
