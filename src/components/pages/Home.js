import React from "react";
import mypic from "./Sheldon-2020-1.jpeg";

function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div
                class="card-body"
                style={{ fontStyle: "regular", fontWweight: "bold" }}
              >
                WELCOME TO MY WEBSITE
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
            <p>
              Hi, I am Sheldon Mall, an aspiring web developer specializing in
              creative branding and design. While you are here, please do take
              the time to check my Portfolio to familiarize yourself with my
              work. I am confident you will be pleased. You will also find
              different ways to contact me under the Contact Me tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
