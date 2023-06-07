import {getRandomItemFromItems, getRandomPrice, createIDgenerator} from '../util.js';
import {fromToDates, pointTypes } from './data.js';
import { destinations, generateDestinations } from './destination.js';
import {getRandomOffersIdsByType} from './offersDefine.js';

const myPoints = [];

const generateWaypointId = createIDgenerator();
const generateWaypoints = (n) => {
  for (let i = 0; i < n; i++) {
    const dates = getRandomItemFromItems(fromToDates);
    const type = getRandomItemFromItems(pointTypes);
    const waypoint = {
      basePrice: getRandomPrice(),
      dateFrom: dates.dateFrom,
      dateTo: dates.dateTo,
      destination: getRandomItemFromItems(destinations).id,
      id: generateWaypointId(),
      offersIDs: getRandomOffersIdsByType(type),
      type
    };
    myPoints.push(waypoint);
  }
};

const mockInit = (numWaypoints, numDestinations) => {
  generateDestinations(numDestinations);
  generateWaypoints(numWaypoints);
};

export {mockInit, myPoints};
