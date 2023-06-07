import {render} from './render.js';
import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import TripPointModel from './model/tripPointModel.js';
import {mockInit} from './mock/tripPoint.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');

mockInit(6, 10);
const modelWaypoints = new TripPointModel();
const boardPresenter = new BoardPresenter({boardContainer: container, waypointsModel: modelWaypoints});

render(new Filters(), siteHeaderElement);
boardPresenter.init();
