import React from 'react'
import { connect } from 'react-redux'

import { toggleAboutOverlay } from '~/data/actions'

import { HOVER_LINK_COLOR } from '~/data/constants'

class ToggleAboutOverlayButton extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.toggleAboutOverlay}>
        About
        <style jsx>{`
          button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: inherit;
            border: none;
            cursor: pointer;
          }
          button:hover {
            color: ${HOVER_LINK_COLOR};
          }
        `}</style>
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleAboutOverlay: () => dispatch(toggleAboutOverlay())
})

export default connect(null, mapDispatchToProps)(ToggleAboutOverlayButton)
