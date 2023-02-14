import React, { useEffect, useState, useContext } from "react"
import Page from "./Page"
import { useParams, Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import LoadingDotsIcon from "./LoadingDotsIcon"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import NotFound from "./NotFound"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function ViewSinglePost() {
  const navigate = useNavigate()
  const appDipatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState()

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source()

    async function fetchPost() {
      try {
        const response = await Axios.get(`/post/${id}`, { cancelToken: ourRequest.token })
        setPost(response.data)
        setIsLoading(false)
      } catch (e) {
        console.log("There was a problem or the request was cancelled.")
      }
    }
    fetchPost()
    return () => {
      ourRequest.cancel()
    }
  }, [])

  if (!isLoading && !post) {
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

  if (isLoading)
    return (
      <Page title="...">
        <LoadingDotsIcon />
      </Page>
    )

  const date = new Date(post.createdDate)
  const dateFormatted = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  function isOwner() {
    if (appState.loggedIn) {
      return appState.user.username == post.author.username
    }
    return false
  }

  async function deleteHandler() {
    const areYouSure = window.confirm("Do you really want to delete this post?")
    if (areYouSure) {
      try {
        const response = await Axios.delete(`/post/${id}`, { data: { token: appState.user.token } })
        if (response.data == "Success") {
          //1. display a flash message
          appDipatch({ type: "flashMessage", value: "Post was succefully deleted" })
          //2. navigate
          navigate(`/profile/${appState.user.username}`)
        }
      } catch (e) {
        console.log("There was a problem")
      }
    }
  }

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        {isOwner() && (
          <span className="pt-2">
            <Link to={`/post/${post._id}/edit`} className="text-primary mr-2" title="Edit">
              <i className="fas fa-edit"></i>
            </Link>
            <a onClick={deleteHandler} className="delete-post-button text-danger" title="Delete">
              <i className="fas fa-trash"></i>
            </a>
          </span>
        )}
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {dateFormatted}
      </p>

      <div className="body-content">
        <ReactMarkdown children={post.body} allowElements={["p", "br", "strong", "em", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li"]} />
      </div>
    </Page>
  )
}

export default ViewSinglePost
