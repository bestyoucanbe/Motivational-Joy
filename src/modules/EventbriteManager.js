import { eventBriteAuthToken } from './keys'

const remoteURL = "https://www.eventbriteapi.com/v3"

export default {
  getEventsByTime(timeperiod) {
    return fetch(`${remoteURL}/events/search/?location.address=nashville&location.within=10mi&start_date.keyword=${timeperiod}&token=${eventBriteAuthToken}`).then(e => e.json())
  }
}