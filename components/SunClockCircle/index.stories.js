import { storiesOf } from '@storybook/react'
import { LocalTime } from 'js-joda'
import { Provider } from 'react-redux'

import SunClockCircle from './'
import createStore from '../../data/createStore'

storiesOf('SunClockCircle', module)
  .add('with long daylight hours', () => (
    <Provider
      store={createStore({
        sunriseDate: new Date(1970, 1, 1, 3, 8, 1),
        sunsetDate: new Date(1970, 1, 1, 3, 8, 1),
        dimension: 500,
        clockDate: new Date(1970, 1, 1, 14, 2, 1)
      })}
    >
      <SunClockCircle />
    </Provider>
  ))
  .add('with long nighttime hours', () => (
    <Provider
      store={createStore({
        sunriseDate: new Date(1970, 1, 1, 9, 32, 1),
        sunsetDate: new Date(1970, 1, 1, 17, 5, 20),
        dimension: 500,
        clockDate: new Date(1970, 1, 1, 3, 2, 1)
      })}
    >
      <SunClockCircle />
    </Provider>
  ))
  .add('with large dimensions and rising sun', () => (
    <Provider
      store={createStore({
        sunriseDate: new Date(1970, 1, 1, 6, 55, 1),
        sunsetDate: new Date(1970, 1, 1, 15, 20, 38),
        dimension: 1200,
        clockDate: new Date(1970, 1, 1, 7, 2, 1)
      })}
    >
      <SunClockCircle />
    </Provider>
  ))
  .add('with small dimensions and setting sun', () => (
    <Provider
      store={createStore({
        sunriseDate: new Date(1970, 1, 1, 2, 47, 1),
        sunsetDate: new Date(1970, 1, 1, 16, 40, 38),
        dimension: 300,
        clockDate: new Date(1970, 1, 1, 16, 35, 1)
      })}
    >
      <SunClockCircle />
    </Provider>
  ))
