import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

import footerStyles from './footer.module.scss'

const Footer = () => {
	const { author } = useSiteMetadata()

	return (
		<footer className={footerStyles.footer}>
			<p>
				Created by {author}, © {new Date().getFullYear()}
			</p>
			<p>
				Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
			</p>
		</footer>
	)
}

export default Footer
