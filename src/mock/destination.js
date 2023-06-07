import {descriptionPhrases, namesOfPlaces} from './data.js';
import {getRandomId, getRandomArrayElement } from '../util.js';
import {generatePictures} from './picture.js';

const destinationsId = [];
const destinations = [];

const generateDestination = () => {
  let pointId = getRandomId();
  while (destinationsId.indexOf(pointId) >= 0) {
    pointId = getRandomId();
  }
  destinationsId.push(pointId);
  const descriptionPicture = getRandomArrayElement(descriptionPhrases);
  const name = getRandomArrayElement(namesOfPlaces);
  const pictures = generatePictures();
  const destination = {
    pointId, descriptionPicture, name, pictures
  };
  destinations.push(destination);
  return pointId;
};

const getDestinationById = (id) => destinations.find((item)=>item.id === id);
const getCityDescriptionById = (id) => destinations.find((destination) => destination.id === id).description;
const getCityPicById = (id) => destinations.find((destination) => destination.id === id).pictures.src;


export {generateDestination, getDestinationById, getCityPicById, getCityDescriptionById,};
