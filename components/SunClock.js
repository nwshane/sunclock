import { connect } from 'react-redux'
import locations from '~/data/locations'

import SunClockPresentation from './SunClockPresentation'
import AppMessage from './AppMessage'
import { getSunriseDate, getSunsetDate } from '~/data/getters'
import {
  fetchCurrentLocationData,
  setError,
  startTick,
  clearTick,
  updateSunTimes,
  setNewLocation
} from '../data/actions'

class SunClock extends React.Component {
  componentDidMount() {
    this.props.setRandomLocation()

    if ('geolocation' in navigator) {
      this.props.fetchCurrentLocationData()
      this.props.startTick()
    } else {
      this.props.setError(
        new Error(
          "Your browser doesn't support geolocation; please try another browser."
        )
      )
    }
  }

  componentWillUnmount() {
    this.props.clearTick(this.interval)
  }

  render() {
    const { error, sunriseDate, sunsetDate } = this.props

    if (!sunriseDate || !sunsetDate) return null
    if (error) return <AppMessage text={`Error: ${error.message}`} />

    return <SunClockPresentation />
  }
}

const mapStateToProps = state => ({
  error: state.error,
  sunriseDate: getSunriseDate(state),
  sunsetDate: getSunsetDate(state)
})

const getRandomLocationId = () => {
  const locationKeys = Object.keys(locations)

  return locationKeys[Math.floor(Math.random() * locationKeys.length)]
}

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error)),
  fetchCurrentLocationData: () => dispatch(fetchCurrentLocationData()),
  startTick: () => dispatch(startTick()),
  clearTick: () => dispatch(clearTick()),
  updateSunTimes: () => dispatch(updateSunTimes()),
  setRandomLocation: () => dispatch(setNewLocation(getRandomLocationId()))
})

export default connect(mapStateToProps, mapDispatchToProps)(SunClock)
