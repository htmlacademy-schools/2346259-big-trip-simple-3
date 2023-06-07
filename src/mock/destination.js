import { getRandomId, getRandomItemFromItems, createIDgenerator } from '../util.js';
import { descriptionPhrases, namesOfPlaces } from './data.js';

const destinations = [];

const generatePictures = () => {
  const pictures = [];
  for (let i = 0; i < 6; i++) {
    const picture = {
      src: `http://picsum.photos/248/152?r=${getRandomId()}`,
      description: getRandomItemFromItems(descriptionPhrases)
    };
    pictures.push(picture);
  }
  return pictures;
};

const generateDestinationId = createIDgenerator();

const generateDestination = (n) => {
  for (let i = 0; i < n; i++) {
    const destination = {
      id: generateDestinationId(),
      description: getRandomItemFromItems(descriptionPhrases),
      name: getRandomItemFromItems(namesOfPlaces),
      pictures: generatePictures()
    };
    destinations.push(destination);
  }
};

const getDestinationByID = (id) => destinations.find((item)=>item.id === id);

export {generateDestination, getDestinationByID, destinations};

