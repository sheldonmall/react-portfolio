import React from "react";
import myprojrps from "./Project-1-RPS.png";
import myprojsn from "./SN-screenshot.png";
import myprojscheduler from "./work-scheduler.png";
import myprojfit from "./fit-world.png";

function Project() {
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
                MY PORTFOLIO
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6" style={{ marginTop: "1rem" }}>
            <img
              class="my-proj1"
              img
              src={myprojrps}
              alt="Rock-Paper-Scissors"
              style={{
                width: "300px",
                height: "200px",
                alignContent: "center",
              }}
            />
            <p
              style={{
                backgroundColor: "rgb(78, 197, 191)",
                justifyContent: "center",
              }}
            >
              Rock Paper Scissors (live code pending)
            </p>
          </div>
          <div class="col-sm-6" style={{ marginTop: "1rem" }}>
            <a href="https://sheldonmall.github.io/SportsNews/" target="_blank">
              <img
                class="my-proj2"
                src={myprojsn}
                alt="Sports News"
                style={{
                  width: "300px",
                  height: "200px",
                  alignContent: "center",
                }}
              />
            </a>
            <p
              style={{
                backgroundColor: "rgb(78, 197, 191)",
                justifyContent: "center",
              }}
            >
              Sports News
            </p>
          </div>
          <div class="col-sm-6" style={{ marginTop: "1rem" }}>
            <a
              href="https://sheldonmall.github.io/day-planner//"
              target="_blank"
            >
              <img
                class="my-proj3"
                src={myprojscheduler}
                alt="Day Planner"
                style={{
                  width: "300px",
                  height: "200px",
                  alignContent: "center",
                }}
              />
            </a>
            <p
              style={{
                backgroundColor: "rgb(78, 197, 191)",
                justifyContent: "center",
              }}
            >
              Day Planner
            </p>
          </div>
          <div class="col-sm-6" style={{ marginTop: "1rem" }}>
            <a
              href="https://evening-shore-76828.herokuapp.com/"
              target="_blank"
            >
              <img
                class="my-proj4"
                src={myprojfit}
                alt="Fit World"
                style={{
                  width: "300px",
                  height: "200px",
                  alignContent: "center",
                }}
              />
            </a>
            <p
              style={{
                backgroundColor: "rgb(78, 197, 191)",
                justifyContent: "center",
              }}
            >
              Fit World
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
