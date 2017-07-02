import makeInfoContent from './makeInfoContent';

export default (lat, lng, title, googleAddress, displayAddress, phoneNumber, hours, website) => {
  return {
    position: {
      lat,
      lng,
    },
    key: title,
    defaultAnimation: 2,
    showInfo: false,
    infoContent: makeInfoContent(
      'title', 'googleAddress', 'displayAddress',
      'phoneNumber', 'hours', 'website'
    ),
  }
}
