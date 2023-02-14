import React from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>Whoops, nós não encontramos essa página.</h2>
        <p className="lead text-muted">
          Você sempre pode visitar a <Link to="/">homepage</Link> e começar de novo!
        </p>
      </div>
    </Page>
  )
}

export default NotFound
