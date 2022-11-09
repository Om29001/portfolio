import { motion } from "framer-motion"
import React from "react"

export default function Certificatepage(props) {
  const Projectlist1 = props.certificatelist[1].map((i) => (
    <div className="col py-3" key={i._id}>
      <motion.div whileHover={{ scale: 1.1 }} className="card h-100 text-center rounded border-2 align-content-center" style={{ boxShadow: " 15px 15px 10px grey" }}>
        <div className="ripple" data-mdb-ripple-color="light">
          <img src={i.link} className="img-thumbnail" alt="Certificate" />
        </div>
      </motion.div>
    </div>
  ))

  return Projectlist1
}

// https://drive.google.com/uc?export=view&id=1mv79bu-c_-01NDganNshf7DYGSTVZ_Pe
