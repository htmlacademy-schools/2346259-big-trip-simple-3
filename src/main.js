import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ModelWaypoint from './model/tripPointModel.js';
import {mockInit, myPoints} from './mock/tripPoint.js';
import {render} from './framework/render.js';
import ModelOffers from './model/offersModel.js';
import ModelDestinations from './model/destinationsModel.js';
import {offersByType} from './mock/data.js';
import {destinations} from './mock/destination.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');

mockInit(5, 10);
const modelWaypoints = new ModelWaypoint(myPoints);
const modelOffers = new ModelOffers(offersByType);
const modelDestinations = new ModelDestinations(destinations);

const boardPresenter = new BoardPresenter({
  boardContainer: container,
  waypointsModel: modelWaypoints,
  modelOffers,
  modelDestinations
});
render(new Filters(), siteHeaderElement);

boardPresenter.init();
