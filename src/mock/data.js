const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];


const taxiOffers = [{
  id: 1,
  title: 'Upgrade a business class',
  price: 120
}, {
  id: 3,
  title: 'Switch to comfort',
  price: 50
}];

const busOffers = [{
  id: 7,
  title: 'Choose seats',
  price: 10
}];

const trainOffers = [{
  id: 1,
  title: 'Food order',
  price: 70
}, {
  id: 5,
  title: 'Choose seats',
  price: 20
}, {
  id: 7,
  title: 'Drinks order',
  price: 50
}];

const shipOffers = [{
  id: 3,
  title: 'Bring a blanket',
  price: 12
}, {
  id: 8,
  title: 'Change cabin',
  price: 76
}, {
  id: 2,
  title: 'Add alcohol',
  price: 100
}];

const driveOffers = [{
  id: 9,
  title: 'Upgrade a car',
  price: 150
}];

const flightOffers = [{
  id: 1,
  title: 'Food order',
  price: 70
},{
  id: 7,
  title: 'Drinks order',
  price: 50
}, {
  id: 5,
  title: 'Choose seats',
  price: 70
}, {
  id: 6,
  title: 'Travel by ship',
  price: 100
}];

const sightseeingOffers = [];

const restaurantOffers = [{
  id: 1,
  title: 'Choose seats',
  price: 35
}];

const checkInOffers = [{
  id: 6,
  title: 'Online',
  price: 15
}];

const offersType = [{
  type: 'taxi',
  offers: taxiOffers
},
{
  type: 'bus',
  offers: busOffers
},
{
  type: 'train',
  offers: trainOffers
},
{
  type: 'ship',
  offers: shipOffers
},
{
  type: 'drive',
  offers: driveOffers
},
{
  type: 'flight',
  offers: flightOffers
},
{
  type: 'check-in',
  offers: checkInOffers
},
{
  type: 'sightseeing',
  offers: sightseeingOffers
},
{
  type: 'restaurant',
  offers: restaurantOffers
},];

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

export {pointTypes, offersType, getArrayFromType, descriptionPhrases, namesOfPlaces, fromToDates};
