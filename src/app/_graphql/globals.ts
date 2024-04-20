// This file typically contains configurations for global components like headers, footers, 
// navigation menus, or any other data that should be consistent throughout the site.

// The purpose of having a dedicated global.ts file is to centralize the management of this 
// global data, making it easier to update and maintain. By separating global data from 
// individual page or component-specific data, it promotes code organization and reusability.


import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    copyright
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    productsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
