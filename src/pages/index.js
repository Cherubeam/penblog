import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import indexStyles from './index.module.scss'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Home" />
			<h1>Posts</h1>
			<ol className={indexStyles.posts}>
				{data.allMarkdownRemark.edges.map(edge => (
					<li
						className={indexStyles.post}
						key={edge.node.fields.slug}
					>
						<Link to={`/${edge.node.fields.slug}`}>
							<h2>{edge.node.frontmatter.title}</h2>
							<p>{edge.node.frontmatter.date}</p>
						</Link>
					</li>
				))}
			</ol>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
		</Layout>
	)
}

export default IndexPage
