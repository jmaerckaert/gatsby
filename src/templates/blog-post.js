import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{ post.title }</h1>
        <small><em>{ Date(post.created) }</em></small>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
      created
    }
  }
  `