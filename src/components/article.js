import React from 'react'
import { exact } from 'prop-types';

const Article = ({ article }) => {
  //default image & author if none avilable
  let image = article.urlToImage ? article.urlToImage : "https://goodlogo.com/images/logos/nike_classic_logo_2355.gif"
  let author = article.author ? article.author : "-"

  return (
    <tr>
      <td><a href={article.url} target="_blank">{article.title}</a></td>
      <td>{article.source.name}</td>
      <td>{author}</td>
      <td>{article.description}</td>
      <td><img src={image} alt="article"/></td>
    </tr>
  )
}

export default Article

