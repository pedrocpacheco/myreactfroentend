import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About Me">
      <h2>About Me!</h2>
      <p className="lead text-muted">Hello, my name is Pedro Carvalho Pacheco and I'm 17 years old!</p>
      <p>I have been passionate about computers and programming since my childhood. I started to study more diligently after I entered the Technical High School in Informatics at "Senac Nações Unidas" in São Paulo (Brazil).</p>
      <p>Currently graduate in "Analysis and Systems Development" at Faculdade de Informática e Administração Paulista (FIAP), which is one of the best colleges of technology in Brazil.</p>
      <p>I have knowledge in HTML, CSS & JavaScript. I'm currently studying ReactJS and NextJS.</p>
      <p>
        You can access my{" "}
        <a href="https://www.linkedin.com/in/pedro-carvalho-pacheco/" target="blank" className="mx-1">
          Linkedin
        </a>{" "}
        and my{" "}
        <a href="https://www.github.com/pedrocpacheco" target="blank" className="mx-1">
          GitHub
        </a>{" "}
        to see what i did so far
      </p>
      <div className="links"></div>
    </Page>
  )
}

export default About
