import {getRandomArrayElement, getRandomId, getRandomPrice} from '../util.js';
import {fromToDates, getArrayFromType, pointType} from './data.js';
import {generateDestination} from './destination.js';

const pointsId = [];

const generatePoint = ()=>{
  let pointId = getRandomId();
  while (pointsId.indexOf(pointId) >= 0) {
    pointId = getRandomId();
  }
  pointsId.push(pointId);
  const price = getRandomPrice();
  const datesOfTrip = getRandomArrayElement(fromToDates);
  const dateFrom = datesOfTrip.dateFrom;
  const dateTo = datesOfTrip.dateTo;
  const destination = generateDestination();
  const type = getRandomArrayElement(pointType);
  const offers = getArrayFromType(type);
  return {
    price, dateFrom, dateTo, destination, pointId, offers, type
  };
};

export {generatePoint};
