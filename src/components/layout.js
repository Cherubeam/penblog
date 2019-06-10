import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = ({ children }) => (
	<div>
		<div>
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
