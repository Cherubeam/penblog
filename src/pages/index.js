import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Posts</h1>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
	</Layout>
)

export default IndexPage
