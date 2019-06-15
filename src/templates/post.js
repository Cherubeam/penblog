import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'
import postStyles from './post.module.scss'

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`

const Post = props => {
	return (
		<Layout>
			<SEO title={props.data.markdownRemark.frontmatter.title} />
			<div className={postStyles.post}>
				<h1>{props.data.markdownRemark.frontmatter.title}</h1>
				<p>
					{moment(props.data.markdownRemark.frontmatter.date).format(
						'D. MMMM YYYY'
					)}
				</p>
				<div
					dangerouslySetInnerHTML={{
						__html: props.data.markdownRemark.html
					}}
				/>
			</div>
		</Layout>
	)
}

export default Post
