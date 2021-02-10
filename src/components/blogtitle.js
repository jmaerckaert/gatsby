import React from "react"
import { Link } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

/*const Blogtitle = (props) => {
  

  return <h3>{props.test}<h3/>
}

export default Blogtitle*/
export default function Header(props) {
  return <h3><Link to={`/${props.id}`}>{ props.test }</Link></h3>
}
