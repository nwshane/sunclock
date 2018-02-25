import { connect } from 'react-redux'

import { toggleAboutOverlay } from '~/data/actions'

class AboutOverlay extends React.Component {
  render() {
    if (!this.props.showOverlay) return null

    return (
      <div className="outside">
        <div>
          <div className="content">
            <button type="button" onClick={this.props.toggleAboutOverlay}>
              X
            </button>
            <p>Welcome to the Sun Clock!</p>
            <p>
              This little visualization shows you the length of day and night
              wherever you are. The clock represents the 24 hours of the day.
              You can also change the date and the location.
            </p>
            <p>
              The Sun Clock was created with {'<'}3 by{' '}
              <a href="https://nathanshane.me/">Nathan Shane</a>.
            </p>
            <div>
              <h3 className="small-heading">Credits:</h3>
              <ul>
                <li>Sun icon: Jeff from the Noun Project</li>
                <li>
                  Sunrise and Sunset icons: Bryn Taylor from the Noun Project
                </li>
              </ul>
            </div>
            <p>Now go outside and get some sun already!</p>
          </div>
        </div>
        <style jsx>{`
          .outside {
            position: absolute;
            top: 0;
            width: 100vw;
            height: 100vh;
          }

          .outside > div {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            width: 100%;
            height: 100%;
          }

          .content {
            background-color: white;
            border-radius: 2px;
            box-sizing: border-box;
            font-size: 18px;
            max-width: 360px;
            padding: 20px;
          }

          .content p {
            margin: 12px 0;
          }

          button {
            float: right;
            margin: 0 0 30px 30px;
            font-size: 20px;
          }

          .small-heading {
            font-size: inherit;
            margin: 0;
          }

          ul {
            margin: 10px 0;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showOverlay: state.overlay === 'about'
})

const mapDispatchToProps = dispatch => ({
  toggleAboutOverlay: () => dispatch(toggleAboutOverlay())
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutOverlay)
