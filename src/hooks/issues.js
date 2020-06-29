import { useState, useEffect } from "react"

const Issues = () => {

  const url = `https://api.github.com/repos/facebook/react/issues`

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

  return issues
}

export default Issues;
