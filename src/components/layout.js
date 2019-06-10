import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => (
	<div className={layoutStyles.container}>
		<div className={layoutStyles.content}>
			<Header siteTitle="Penblog" />
			<main>{children}</main>
		</div>

		<Footer />
	</div>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
