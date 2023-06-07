import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'H:mm';
const FULL_DATE_FORMAT = 'DD/MM/YY';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPrice = () => Math.floor(Math.random() * 1000) + 100;

const getRandomId = () => Math.floor(Math.random() * 100) + 1;

const getRandomPic = () => `http://picsum.photos/248/152?r=${getRandomId()}`;

const getTimeDate = (date) => date.substring(0, date.indexOf('T'));
const getDateForm = (date) => dayjs(date).format(DATE_FORMAT);
const getDateTime = (date) => date.substring(0, date.indexOf('.'));
const getTimeFormat = (date) => dayjs(date).format(TIME_FORMAT);
const getUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
const getFullFormDate = (date) => dayjs(date).format(FULL_DATE_FORMAT);

export {getRandomPic, getRandomArrayElement, getRandomPrice, getRandomId, getTimeDate, getDateForm, getDateTime, getTimeFormat, getUpperCase, getFullFormDate};
