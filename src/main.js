import BoardPresenter from './presenter/board-presenter.js';
import ModelWaypoint from './model/model-waypoint.js';
import ModelOffers from './model/model-offers.js';
import ModelDestinations from './model/model-destinations.js';
import ModelFilters from './model/model-filter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import {render} from './framework/render.js';
import NewWaypointButton from './view/new-waypoint-button-view.js';
import WaypointsApiService from './api/waypoints-api-service.js';

const AUTHORIZATION = 'Basic Emil0985aa7';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');
const placeForButton = document.querySelector('.trip-main');

const waypointsApiService = new WaypointsApiService(END_POINT, AUTHORIZATION);

const modelWaypoints = new ModelWaypoint({waypointsApiService});
const modelOffers = new ModelOffers({waypointsApiService});
const modelDestinations = new ModelDestinations({waypointsApiService});
const modelFilter = new ModelFilters();

const boardPresenter = new BoardPresenter({
  boardContainer: container,
  waypointsModel: modelWaypoints,
  modelOffers,
  modelDestinations,
  modelFilter,
  onNewWaypointDestroy: handleNewTaskFormClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: siteHeaderElement,
  modelFilter,
  modelWaypoints
});

const newWaypointButtonComponent = new NewWaypointButton({
  onClick: handleNewTaskButtonClick
});

function handleNewTaskFormClose() {
  newWaypointButtonComponent.element.disabled = false;
}

function handleNewTaskButtonClick() {
  boardPresenter.createWaypoint();
  newWaypointButtonComponent.element.disabled = true;
}

filterPresenter.init();
boardPresenter.init();
modelWaypoints.init()
  .finally(() => {
    render(newWaypointButtonComponent, placeForButton);
  });
