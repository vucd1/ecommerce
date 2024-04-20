// interface keyword is a type checker. The properties the interface requires are present and 
// have the required type. Itdoes not require that these properties come in any sort of order.

interface Args {
  disableLabel?: true
  disableAppearance?: true
}

// = {} declares a default argument
// A normal default arg: function name(parameter1=defaultValue1,...) {
// We're just adding destructuring to this...
export const LINK_FIELDS = ({ disableAppearance, disableLabel }: Args = {}): string => `{
  ${!disableLabel ? 'label' : ''}
  ${!disableAppearance ? 'appearance' : ''}
  type
  newTab
  url
  icon {
    url
  }
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`
