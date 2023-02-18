import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/about-us">
          About Me
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
      </p>
      <p className="m-0">
        2023{" "}
        <a href="https://github.com/pedrocpacheco/myreactfroentend" className="text-muted">
          ReactApp!{" "}
        </a>
        <a href="https://www.linkedin.com/in/pedro-carvalho-pacheco/" target="blank" className="text-muted">
          Pedro Carvalho Pacheco
        </a>
      </p>
    </footer>
  )
}

export default Footer
