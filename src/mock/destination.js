import {getRandomItemFromItems, createIDgenerator} from '../util.js';
import {descriptionText, nameOfPlaces} from './data.js';

const destinations = [];

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < 6; i++) {
    const picture = {
      src: 'img/photos/1.jpg',
      description: getRandomItemFromItems(descriptionText)
    };
    pictures.push(picture);
  }
  return pictures;
};

const generateDestinationId = createIDgenerator();

const generateDestinations = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: getRandomItemFromItems(descriptionText),
      name: getRandomItemFromItems(nameOfPlaces),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};


const getDestinationByID = (id) => destinations.find((item) => item.id === id);

export {generateDestinations, destinations, getDestinationByID};
