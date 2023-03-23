import React, { useState } from "react"
import Projectpage from "./Portfoliopage/Projectpage"
import Certificatepage from "./Portfoliopage/certificatepage"
import Redhead from "./comp/Redhead"
import { useEffect } from "react"

export default function Portfoliopage() {
  const [pdata, setPdata] = useState([])

  const callPortfoliopage = async (e) => {
    try {
      console.log("bhai bhaoi")
      const res = await fetch("https://port-folio-server-omega.vercel.app/portfolio", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      const data = await res.json()
      setPdata(data)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    callPortfoliopage()
  }, [])

  return (
    <>
      <div className="container my-5  bg-light" style={{ fontFamily: "Arial" }}>
        <section className="px-2  dark-grey-text text-left text-lg-left">
          <center>
            <Redhead pheading="PROJECTS" />
          </center>

          {pdata.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 ">
              <Projectpage projectlist={pdata} />
            </div>
          ) : (
            <div class="text-center pt-5">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </section>
      </div>
      <hr />
      <div className="container my-5 bg-light" style={{ fontFamily: "Arial" }}>
        <section className="px-md-2 mx-md-2 dark-grey-text text-left text-lg-left">
          <center>
            <Redhead pheading="CERTIFICATES AND ACHIEVEMENT" />
          </center>
          {pdata.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 ">
              <Certificatepage certificatelist={pdata} />
            </div>
          ) : (
            <div class="text-center pt-5">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
