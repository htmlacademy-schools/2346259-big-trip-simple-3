const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offers = [
  {
    id: 1,
    title: 'Upgrade a business class',
    price: 100
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 389
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 41
  },
  {
    id: 4,
    title: 'Add meal',
    price: 71
  },
  {
    id: 5,
    title: 'Add alcohol',
    price: 43
  },
  {
    id: 6,
    title: 'Choose a seat',
    price: 54
  },
  {
    id: 7,
    title: 'Personal transfer',
    price: 28
  },
  {
    id: 8,
    title: 'Upgrade a car',
    price: 1510
  },
  {
    id: 9,
    title: 'No queue',
    price: 112
  }
];
const getOfferName = (offerId) => offers.find((offer) => offer.id === offerId).title;
const getOfferPrice = (offerId) => offers.find((offer) => offer.id === offerId).price;

const taxiOffers = [1, 3];

const busOffers = [2, 6];

const trainOffers = [4];

const shipOffers = [2, 4, 5, 6, 7, 9];

const driveOffers = [1, 3, 8];

const flightOffers = [2, 4, 5, 6, 7, 9];

const checkInOffers = [4, 9];

const sightseeingOffers = [2, 7];

const restaurantOffers = [6, 9];

const getArrayFromType = (type) => {
  switch (type) {
    case 'taxi':
      return taxiOffers;
    case 'bus':
      return busOffers;
    case 'train':
      return trainOffers;
    case 'ship':
      return shipOffers;
    case 'drive':
      return driveOffers;
    case 'flight':
      return flightOffers;
    case 'check-in':
      return checkInOffers;
    case 'sightseeing':
      return sightseeingOffers;
    case 'restaurant':
      return restaurantOffers;
  }
};

const descriptionPhrases = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Aliquam id orci ut lectus varius viverra.', 'Fusce tristique felis at fermentum pharetra.',
  'Nullam nunc ex, convallis sed finibus eget.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.'
];

const namesOfPlaces = [
  'Madrid', 'Munich', 'Dortmund', 'Manchester', 'Home', 'Moscow'
];

const fromToDates = [
  {
    dateFrom: '2019-07-11T11:22:13.375Z',
    dateTo: '2019-07-11T11:40:13.375Z'
  },
  {
    dateFrom: '2019-07-13T11:22:13.375Z',
    dateTo: '2019-07-13T14:40:13.375Z'
  },
  {
    dateFrom: '2019-07-10T11:22:13.375Z',
    dateTo: '2019-07-10T11:40:13.375Z'
  },
  {
    dateFrom: '2019-07-15T09:15:13.375Z',
    dateTo: '2019-07-15T12:00:13.375Z'
  },
  {
    dateFrom: '2019-08-01T17:00:13.375Z',
    dateTo: '2019-08-01T18:00:13.375Z'
  },
  {
    dateFrom: '2019-08-03T11:22:13.375Z',
    dateTo: '2019-08-03T11:40:13.375Z'
  },
  {
    dateFrom: '2019-08-05T07:30:13.375Z',
    dateTo: '2019-08-05T09:00:13.375Z'
  },
  {
    dateFrom: '2019-07-18T20:20:13.375Z',
    dateTo: '2019-07-18T21:40:13.375Z'
  },
  {
    dateFrom: '2019-07-21T01:28:13.375Z',
    dateTo: '2019-07-21T07:40:13.375Z'
  },
  {
    dateFrom: '2019-07-28T16:15:13.375Z',
    dateTo: '2019-07-28T20:40:13.375Z'
  }
];

export {pointType, offers, getArrayFromType, descriptionPhrases, namesOfPlaces, fromToDates, getOfferName, getOfferPrice};
