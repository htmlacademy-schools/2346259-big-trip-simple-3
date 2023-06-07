import {offersType } from './data.js';
import { getRandomSliceFromItems } from '../util.js';


const getRandomOffersIdsByType = (type) => {
  const currentTypeOffers = getRandomSliceFromItems(
    offersType.find((currentOffers) => currentOffers.type === type).offers);
  return currentTypeOffers.map((offer) => offer.id);
};

const getOfferById = (type, offerId)=> offersType.find((el)=>el.type === type).offers.find((offer)=>offer.id === offerId);


export {getRandomOffersIdsByType, getOfferById};
