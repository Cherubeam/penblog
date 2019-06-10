/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

// Create slugs for pages
module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md')

		createNodeField({ node, name: 'slug', value: slug })
	}
}

// Create pages from data programmatically
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const postTemplate = path.resolve('./src/templates/post.js')
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	res.data.allMarkdownRemark.edges.forEach(edge => {
		const slug = edge.node.fields.slug
		createPage({
			component: postTemplate,
			path: `/${slug}`,
			context: { slug }
		})
	})
}
