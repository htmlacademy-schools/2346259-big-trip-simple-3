import {createElement} from '../render.js';

function createTripListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventList{
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  getTemplate() {
    return createTripListTemplate();
  }

  removeElement() {
    this.element = null;
  }
}
