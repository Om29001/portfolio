import React, { useState } from "react"
import om from "./image/om.png"
import parse from "html-react-parser"
import anime from "animejs"
import { NavLink as Link } from "react-router-dom"
import Mybutton from "./comp/Mybutton"
import { motion } from "framer-motion"
import Intro from "./About/Intro"
import { Icon } from "@iconify/react"

export default function Home() {
  function start() {
    anime({
      targets: ".animetrail",
      translateY: [250, 0],

      easing: "linear",
    })
  }

  let [showMe, setshowMe] = useState(false)

  var text1 = "A Software Engineer and Web Developer.."
  text1 = text1.replace(/\S/g, "<span className = el >$&</span>")
  text1 = parse(text1)

  function shoot() {
    setshowMe((prev) => !prev)
    Textom()
  }

  function Textom() {
    if (showMe) {
      return <User />
    } else {
      return <Guest />
    }
  }

  function User() {
    function randomValues() {
      anime({
        targets: ".main .el",
        translateX: function () {
          return anime.random(-200, 180)
        },
        translateY: function () {
          return anime.random(200, -200)
        },
        easing: "easeInOutQuad",
        duration: 500,
        complete: randomValues,
      })
    }

    randomValues()
    return (
      <>
        <h5 className="main" style={{ display: "flex", zIndex: "-10" }}>
          {text1}
        </h5>
      </>
    )
  }

  function Guest() {
    return <h5 className="text-muted font-weight-bold">{text1}</h5>
  }

  return (
    <>
      {start}
      <div className="container mb-5 mt-2">
        <section className=" dark-grey-text text-left text-lg-left">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0 animetrail ">
              <div>
                <motion.h1 animate={{ opacity: [0, 0.3, 1], rotate: [-180, 0] }} transition={{ type: "linear", bounce: 1 }} className="font-weight-bold">
                  HELLO! <div className="text-primary">I'M OM SURTI</div>
                </motion.h1>
                <motion.p animate={{ y: [580, 0] }} transition={{ type: "easeIn", bounce: 1 }}>
                  <Textom />
                </motion.p>
                <motion.div className="mb-5" animate={{ opacity: [0, 1] }} transition={{ type: "easeOut", bounce: 1, duration: 1.5 }}>
                  <p>
                    <Icon className="text-primary" icon="fluent:mail-16-filled" width={25} />
                    <span className="text-muted font-weight-bold">omsurti29001@gmail.com</span>
                  </p>
                  <p>
                    <Icon className="text-primary" icon="entypo:location-pin" width={25} />
                    <span className="text-muted font-weight-bold">Mumbai, India</span>
                  </p>
                  <a href="https://www.linkedin.com/in/om-surti-a6800b1b4/" className="mr-2">
                    <Icon icon="logos:linkedin-icon" width={25} />
                  </a>

                  <a href="https://github.com/Om29001" className="mr-2">
                    <Icon icon="akar-icons:github-fill" width={25} color="black" />
                  </a>
                </motion.div>
                <motion.div animate={{ opacity: [0, 1] }} transition={{ type: "easeOut", bounce: 1, duration: 1.5 }}>
                  <button className="btn bg-primary bg-gradient text-white btn-md ml-0" onClick={shoot}>
                    Weird animtion
                  </button>
                  <Link exact to="/portfolio" className="pl-2">
                    <Mybutton name="To Portfolio" />
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="col-lg-5 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
              <img src={om} className="img-fluid mx-auto " alt="" />
            </div>
          </div>
        </section>
        <hr />
        <Intro />
      </div>
    </>
  )
}
