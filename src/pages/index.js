import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import indexStyles from './index.module.scss'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						frontmatter {
							title
							date
							tags
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
			<ol className={indexStyles.posts}>
				{data.allMarkdownRemark.edges.map(edge => (
					<li
						className={indexStyles.post}
						key={edge.node.fields.slug}
					>
						<Link to={`/${edge.node.fields.slug}`}>
							<h2>{edge.node.frontmatter.title}</h2>
							<p>
								<date datetime={edge.node.frontmatter.date}>
									{moment(edge.node.frontmatter.date).format(
										'D. MMMM YYYY'
									)}
								</date>
							</p>
							<ul className={indexStyles.tags}>
								{edge.node.frontmatter.tags
									? edge.node.frontmatter.tags.map(tag => (
											<li className={indexStyles.tag}>
												#{tag}
											</li>
									  ))
									: null}
							</ul>
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
