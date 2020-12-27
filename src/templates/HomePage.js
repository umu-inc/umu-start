import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import './HomePage.css'

const numbers = ['test4', 'test3', 'test2', '2020年12月10日test1設立'];

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, news, newstext, featuredImage, ceo, ceotext, concept, concepttext, desgin, desginimage, future, futuretext, profileimage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div className="onesection">
          <h1 className="Home--text">{news}</h1>
            {/* cmsでフォルダにmdを作成していく
                新しいmdから取得
                QLでmd取得
                最大三件まで表示されるようにする　ok
            */}
          {numbers.slice(-3).reverse().map((num) => (<div className="box22"><p className="Home--text">{num}</p></div>))}
        </div>
        <div className="onesection">
          <h1 className="Home--text">{concept}</h1>
          <div className="box22"><p className="Home--text">{concepttext}</p></div>
        </div>
        <div className="onesection">
          <h1 className="Home--text">{desgin}</h1>
          {/* デザイン
              最新３件表示されるようにする
              残りはブログの所
          */}
          {numbers.slice(-3).reverse().map((num) => (<div><p>デザイン</p><img src={desginimage} ></img></div>))}
        </div>
        <div className="onesection">
          <h1 className="Home--text">{ceo}</h1>
          <div className="box22"><img src={profileimage} ></img><p className="Home--text">{ceotext}</p></div>
        </div>
          <div className="onesection">
          <h1 className="Home--text">{future}</h1>
          <div className="box22"><p className="Home--text">{futuretext}</p></div>
          {/* <Content source={body} /> */}
        </div>
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
        desginimage
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
