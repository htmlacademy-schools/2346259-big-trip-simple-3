import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ModelWaypoint from './model/tripPointModel.js';
import {mockInit, myPoints} from './mock/tripPoint.js';
import {render} from './framework/render';
import {generateFilter} from './mock/filter.js';
import {generateSorter} from './mock/sort.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');
const filters = generateFilter();
const sorters = generateSorter();

mockInit(5, 10);
const modelWaypoints = new ModelWaypoint(myPoints);
const boardPresenter = new BoardPresenter({boardContainer: container, waypointsModel: modelWaypoints, sorters});
render(new Filters(filters), siteHeaderElement);

boardPresenter.init();
