import {createElement} from '../render.js';
import { getTimeDate, getDateForm, getDateTime, getTimeFormat, getUpperCase } from '../util.js';
import { getDestinationById } from '../mock/destination.js';
import { getOfferName, getOfferPrice } from '../mock/data.js';

function createOffersTemplate(offers) {
  return offers.map((offer) => `
    <li class="event__offer">
      <span class="event__offer-title">${getOfferName(offer)}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${getOfferPrice(offer)}</span>
    </li>
  `).join('');
}

function createTripItemTemplate(eventPoint) {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = eventPoint;
  const eventDateTime = getTimeDate(dateFrom);
  const eventDate = getDateForm(dateFrom);
  const fromDateTime = getDateTime(dateFrom);
  const fromTime = getTimeFormat(dateFrom);
  const toDateTime = getDateTime(dateTo);
  const toTime = getTimeFormat(dateTo);
  const offersTemplate = createOffersTemplate(offers);
  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${eventDateTime}">${eventDate}">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${getUpperCase(type)} ${getDestinationById(destination)}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fromDateTime}">${fromTime}">10:30</time>
          &mdash;
          <time class="event__end-time" datetime="${toDateTime}">${toTime}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${offersTemplate}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class EventItem {
  constructor({tripPoint}) {
    this.tripPoint = tripPoint;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  getTemplate() {
    return createTripItemTemplate(this.tripPoint);
  }

  removeElement() {
    this.element = null;
  }
}
