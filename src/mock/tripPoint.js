import {getRandomItemFromItems, getRandomPrice, createIDgenerator} from '../util.js';
import {fromToDates, pointTypes} from './data.js';
import {destinations, generateDestination } from './destination.js';
import {getRandomOffersIdsByType} from './offersDefine.js';

const pointsId = [];

const generatePointId = createIDgenerator();
const generatePoints = (n) => {
  for (let i = 0; i < n; i++) {
    const dates = getRandomItemFromItems(fromToDates);
    const type = getRandomItemFromItems(pointTypes);
    const point = {
      basePrice: getRandomPrice(),
      dateFrom: dates.dateFrom,
      dateTo: dates.dateTo,
      destination: getRandomItemFromItems(destinations).id,
      id: generatePointId(),
      offersIDs: getRandomOffersIdsByType(type),
      type
    };
    pointsId.push(point);
  }
};

const mockInit = (numPoints, numDestinations) => {
  generateDestination(numDestinations);
  generatePoints(numPoints);
};

function getRandomPoint() {
  return getRandomItemFromItems(pointsId);
}

export {mockInit, pointsId, getRandomPoint};

