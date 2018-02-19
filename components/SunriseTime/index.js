import { connect } from 'react-redux'

import { formatToHoursMinutes } from '../../data/timeFormatters'
import { getSunriseTime } from '../../data/getters'

class SunriseTime extends React.Component {
  render() {
    return (
      <p>
        {this.props.formattedSunriseTime}
        <br /> (Sunrise)
        <style jsx>{`
          p {
            position: absolute;
            top: 20px;
            left: 20px;
            margin: 0;
          }
        `}</style>
      </p>
    )
  }
}

const mapStateToProps = state => ({
  formattedSunriseTime: formatToHoursMinutes(getSunriseTime(state))
})

export default connect(mapStateToProps)(SunriseTime)
