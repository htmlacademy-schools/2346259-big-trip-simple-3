import { getRandomPoint} from '../mock/tripPoint.js';

const POINT_NUMBER = 3;

export default class TripPointModel {
  #tripPoints = Array.from({length: POINT_NUMBER}, getRandomPoint);

  getTripPoints() {
    return this.#tripPoints;
  }
}
