import { getRandomPic, getRandomArrayElement } from '../util.js';
import { descriptionPhrases } from './data.js';

const generatePictures = () => ({
  src: getRandomPic(),
  description: getRandomArrayElement(descriptionPhrases)
});

export {generatePictures};
