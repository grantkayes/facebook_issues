import React from 'react'
import Article from './article'

const Articles = ({ articles }) => {

  const mappedArticles = articles.map((article, index) => {
    return (
      <Article article={article} key={index}/>
    )
  })

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Article Title</th>
          <th scope="col">Source</th>
          <th scope="col">Author</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        { mappedArticles }
      </tbody>
    </table>
  )
}

export default Articles