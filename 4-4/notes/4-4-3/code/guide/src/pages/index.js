import React from "react"
import { Link, graphql } from 'gatsby'
import SEO from "../components/SEO"
import styles from "../styles/index.module.less"

export default function Home({ data }) {
  const {title, description, author} = data.site.siteMetadata;
  console.log('styles',styles)
  return (
    <>
      <SEO title="index page" />
      <div>
        <div>Hello world!</div>
        {/* <Link to="/person/zhangsan">zhangsan</Link>
        <Link to="/person/lisi">lisi</Link> */}
        <Link to="/list">list</Link>
        <p>title: {title}</p>
        <p>description:{description}</p>
        <p>author:{author}</p>
      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }

`