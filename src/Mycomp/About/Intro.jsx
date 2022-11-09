import React from "react"
import Typewriter from "typewriter-effect"
import Redhead from "../comp/Redhead"
import toon from "../image/toon_1.png"
import myPDF from "../data/Resume_om_surti.pdf"
import Carsoule from "./Carsoule"

export default function Intro() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?Arial" rel="stylesheet"></link>
      <div className="container mt-3 text-white" style={{ fontFamily: "Arial" }}>
        <section className=" dark-grey-text text-left text-lg-left">
          <div className="row">
            {/* Left Part */}
            <div className="col-lg-5 mb-4 mb-lg-0 d-flex align-items-center justify-content-center ">
              <img src={toon} className="img-fluid mx-auto " alt="" />
            </div>

            {/* Right Part */}
            <div className="col-lg-7 mb-4 my-5 mb-lg-0">
              <Redhead pheading="ABOUT ME" />
              <br />
              <div className=" rounded bg-primary px-3 py-2 ml-auto">
                {
                  <Typewriter
                    options={{
                      strings: " I am Newbie Programmer, based in Mumbai, India.",
                      autoStart: true,
                      loop: true,
                    }}
                  />
                }
              </div>

              <div className="py-2 mt-1 text-black text-justify" id="lineh">
                <p>
                  I enjoy turning complex problems into simple ones. When I'm not punching keyboard you'll find me Travelling, Reading or just scrolling Instagram.
                  <br />I have done Projects on software development, Front-end, Back-end and database (Full-Stack) Development.
                </p>
                <Carsoule />
                <a href={myPDF} download="Resume_Om_Surti.pdf" className=" m-2 btn bg-primary bg-gradient text-white btn-md my-3 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  &nbsp;Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
