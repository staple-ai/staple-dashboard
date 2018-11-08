import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CreditControl from './CreditControl'

class CreditControlPage extends React.Component {
  static defaultProps = {
    pathName: 'Credit Control',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Credit Control" />
        <CreditControl />
      </Page>
    )
  }
}

export default CreditControlPage