import {render} from './render.js';
import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import TripPointModel from './model/tripPointModel.js';

const main = document.querySelector('.page-body__page-main');
const container = main.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const pointsModel = new TripPointModel();
const boardPresenter = new BoardPresenter({boardContainer: container, pointsModel});

render(new Filters(), siteFilterElement);
boardPresenter.init();
