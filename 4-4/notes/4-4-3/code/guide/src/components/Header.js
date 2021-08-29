import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  const {title, description, author} = data.site.siteMetadata;
  return (
    <div>
      <p>title:{title}</p>
      <p>description:{description}</p>
      <p>author:{author}</p>
    </div>
  )
}
