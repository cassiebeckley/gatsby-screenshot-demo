import React from "react"
import Img from "gatsby-image"

import styles from "./index.module.css"
import logo from "../gatsby-light.svg"

export default ({ data }) => (
  <div className={styles.gallery}>
    <div className={styles.header}>
      <h1>
        powered by
        <img src={logo} className={styles.logo} alt="" />
      </h1>
    </div>
    <div className={styles.sites}>
      {data.allSitesYaml.edges.map(({ node }, index) => (
        <div className={styles.site} key={index}>
          <a href={node.url}>
            <Img
              resolutions={
                node.childScreenshot.imageFile.childImageSharp.resolutions
              }
              alt={node.name}
              className={styles.shadow}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export const query = graphql`
  query SitesQuery {
    allSitesYaml {
      edges {
        node {
          url
          name
          childScreenshot {
            imageFile {
              childImageSharp {
                resolutions(width: 384, height: 288) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`
