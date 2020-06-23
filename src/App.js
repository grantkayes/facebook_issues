import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import Articles from "./components/articles"
import Pagination from "./components/pagination"
import './App.css'

const App = () => {

  //replace with your own API key or env file
  const url = `https://api.github.com/repos/facebook/react/issues`

  //React Hooks to set pagination and loaded articles
  const [issues, setIssues] = useState([])
  const [issueResults, setIssueResults] = useState({})
  //const [currentPage, setCurrentPage] = useState(1)
  //const [articlesPerPage] = useState(3)
  //const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setIssues(data)
    })
  }, [])

  //get the indices for pagination
  //const indexOfLastArticle = currentPage * articlesPerPage
  //const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  //const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  return (
    <div className="d-flex flex-column align-items-center">
      <center className="d-block mt-3"><h1 className="font-weight-bold">React Issue Search<FontAwesomeIcon icon={faAtom} size="lg" className="ml-3" spin/></h1></center>
      <TextField className="mt-5" width="25%" id="standard-basic" label="Issues" onChange={ event => console.log(event.target.value)}/>
      <ul>
      {issues.map(issue => (
        <li key={issue.id}>{issue.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default App
