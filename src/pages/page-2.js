import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Blogtitle from "../components/blogtitle"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ( ) => (
  <StaticQuery
    query={graphql`
      query {
		allNodeArticle {
			edges {
			  node {
				id
				title
			  }
			}
		  }
		}
    `}
    render={(data) => (
      <Layout>
        <SEO title="Home"  />
				{data.allNodeArticle.edges.map(test => (
			<Blogtitle test={test.node.title} id={test.node.id} />
				))}
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)


export default IndexPage
