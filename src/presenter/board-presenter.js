import FormCreator from '../view/formCreator-view.js';
import SortView from '../view/sort-view.js';
import EventList from '../view/eventList-view.js';
import NoPoint from '../view/noItems.js';
import {render, RenderPosition} from '../framework/render.js';
import WaypointPresenter from './point-presenter.js';
import {SortType} from '../mock/data.js';
import {sorts} from '../mock/sort.js';

export default class BoardPresenter {
  #waypointListComponent = new EventList();
  #noWaypointMessage = new NoPoint();
  #sortComponent = new SortView();
  #waypointPresenter = new Map();
  #currentSortType = SortType.DAY;
  #sourcedWaypoints = [];

  #boardContainer = null;
  #waypointsModel = null;
  #waypoints = null;

  constructor({boardContainer, waypointsModel}) {
    this.#boardContainer = boardContainer;
    this.#waypointsModel = waypointsModel;
  }

  init() {
    this.#waypoints = [...this.#waypointsModel.arrWaypoints];
    this.#renderBoard();
    this.#sourcedWaypoints = [...this.#waypointsModel.arrWaypoints];
  }

  #renderSort() {
    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  }

  #renderNoWaypoint() {
    render(this.#noWaypointMessage, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #handleModeChange = () => {
    this.#waypointPresenter.forEach((presenter) => presenter.resetView());
  };

  #renderWaypoint(waypoint) {
    const waypointPresenter = new WaypointPresenter({
      waypointList: this.#waypointListComponent.element,
      onModeChange: this.#handleModeChange
    });

    waypointPresenter.init(waypoint);
    this.#waypointPresenter.set(waypoint.id, waypointPresenter);
  }

  #renderWaypoints() {
    this.#waypoints.forEach((waypoint) => this.#renderWaypoint(waypoint));
  }

  #renderWaypointsList() {
    render(this.#waypointListComponent, this.#boardContainer);
    this.#renderWaypoints();
  }

  #renderBoard() {
    if (this.#waypoints.length === 0) {
      render(this.#renderNoWaypoint, this.#boardContainer);
      return;
    }
    this.#renderSort();

    render(new FormCreator(this.#waypoints[0]), this.#waypointListComponent.element);
    this.#renderWaypointsList();
  }

  #clearWaypointList() {
    this.#waypointPresenter.forEach((presenter) => presenter.destroy());
    this.#waypointPresenter.clear();
    //remove(this.#sortComponent); в демо есть, по факту не ок
  }

  #sortWaypoints(sortType) {
    if (sorts[sortType]) {
      this.#waypoints.sort(sorts[sortType]);
    } else {
      this.#waypoints = [...this.#sourcedWaypoints];
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortWaypoints(sortType);
    this.#clearWaypointList();
    this.#renderWaypointsList();
  };
}
