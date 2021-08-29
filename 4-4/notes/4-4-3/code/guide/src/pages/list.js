import React from "react"
import Header from "../components/Header"
import { Link, graphql } from 'gatsby'
import SEO from "../components/SEO"

export default function List({ data }) {
  return (
    <div>
      <SEO title="list page" description="list page description" />
      <div>List Page!</div>
      <Header />
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <Link to={`/article/${post.fields.slug}`}>{post.frontmatter.title}</Link>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
      ))}
    </div>
    
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        title
      }
      fields {
        slug
      }
      html
      id
    }
  }
}
`
