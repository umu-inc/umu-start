import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import './HomePage.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, news, newstext, featuredImage, ceo, ceotext, concept, concepttext, desgin, desgintext, future, futuretext, profileimage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <h1 className="Home--text">{news}</h1>
        <div className="box22"><p className="Home--text">{newstext}</p></div>
        <h1 className="Home--text">{concept}</h1>
        <div className="box22"><p className="Home--text">{concepttext}</p></div>
        <h1 className="Home--text">{desgin}</h1>
        <div className="box22"><p className="Home--text">{desgintext}</p></div>
        <h1 className="Home--text">{ceo}</h1>
        <div className="box22"><img src={profileimage} width="30%"></img><p className="Home--text">{ceotext}</p></div>
        <h1 className="Home--text">{future}</h1>
        <div className="box22"><p className="Home--text">{futuretext}</p></div>
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        news
        newstext
        concept
        concepttext
        desgin
        desgintext
        ceo
        ceotext
        future
        futuretext
        profileimage
        featuredImage
      }
    }
  }
`
