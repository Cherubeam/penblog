import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header className={headerStyles.header}>
		<h1>
			<Link className={headerStyles.title} to="/">
				{siteTitle}
			</Link>
		</h1>
		<nav>
			<ul className={headerStyles.navList}>
				<li>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/about"
					>
						About me
					</Link>
				</li>
				<li>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/contact"
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/impressum"
					>
						Impressum
					</Link>
				</li>
			</ul>
		</nav>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ''
}

export default Header
