import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ModelWaypoint from './model/tripPointModel.js';
import {mockInit, myPoints} from './mock/tripPoint.js';
import {render} from './framework/render';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');

mockInit(5, 10);
const modelWaypoints = new ModelWaypoint(myPoints);
const boardPresenter = new BoardPresenter({boardContainer: container, waypointsModel: modelWaypoints});
render(new Filters(), siteHeaderElement);

boardPresenter.init();
