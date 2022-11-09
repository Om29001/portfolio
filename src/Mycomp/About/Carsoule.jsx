import React from "react"
import OwlCarousel from "react-owl-carousel-loop"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import { Icon } from "@iconify/react"

export default function Carsoule() {
  const skills = [
    { i: "logos:python" },
    { i: "logos:react" },
    { i: "logos:javascript" },
    { i: "vscode-icons:file-type-node" },
    { c: "#0ff2cc", i: "simple-icons:chakraui" },
    { i: "vscode-icons:file-type-vscode2" },
    { i: "logos:slack-icon" },
    { i: "vscode-icons:file-type-mongo" },
    { i: "logos:html-5" },
    { i: "logos:mysql" },
    {i:"simple-icons:canva",c:"#0ff2cc"}
  ]
  return (
    <OwlCarousel loop items={5} autoplay>
      {skills.map((skill) => (
        <div className="item">
          <Icon icon={skill.i} width={40} color={skill.c && skill.c} />
        </div>
      ))}
    </OwlCarousel>
  )
}
