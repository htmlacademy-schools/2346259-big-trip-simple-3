import SortView from '../view/sort-view.js';
import EventList from '../view/eventList-view.js';
import NoPoint from '../view/noItems.js';
import {render, RenderPosition} from '../framework/render';
import WaypointPresenter from './point-presenter.js';
import {SortType} from '../mock/data.js';
import {sorts} from '../mock/sort.js';
import {updateWaypoint} from '../util.js';
import EditForm from '../view/formEditor-view.js';

export default class BoardPresenter {
  #waypointListComponent = new EventList();
  #noWaypointMessage = new NoPoint();
  #sortComponent = new SortView ();
  #waypointPresenter = new Map();
  #currentSortType = SortType.DAY;
  #sourcedWaypoints = [];
  #offers = [];
  #destinations = [];

  #boardContainer = null;
  #waypointsModel = null;
  #waypoints = null;
  #modelOffers = null;
  #modelDestinations = null;

  constructor({boardContainer, waypointsModel, modelOffers, modelDestinations}) {
    this.#boardContainer = boardContainer;

    this.#waypointsModel = waypointsModel;
    this.#modelOffers = modelOffers;
    this.#modelDestinations = modelDestinations;
  }

  init() {
    this.#waypoints = [...this.#waypointsModel.waypoints];
    this.#offers = [...this.#modelOffers.offers];
    this.#destinations = [...this.#modelDestinations.destinations];
    this.#renderBoard();
    this.#sourcedWaypoints = [...this.#waypointsModel.waypoints];
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
      offers: this.#offers,
      destinations: this.#destinations,
      onDataChange: this.#handleWaypointChange,
      onModeChange: this.#handleModeChange,
    });

    waypointPresenter.init(waypoint, this.#destinations, this.#offers);
    this.#waypointPresenter.set(waypoint.id, waypointPresenter);
  }

  #renderWaypointsList() {
    render(this.#waypointListComponent, this.#boardContainer);
    this.#waypoints.forEach((waypoint) => this.#renderWaypoint(waypoint));
  }

  #renderBoard() {
    if (this.#waypoints.length === 0) {
      render(this.#renderNoWaypoint, this.#boardContainer);
      return;
    }
    this.#renderSort();

    render(new EditForm({
      destinations: this.#destinations,
      offers: this.#offers,
      isEditForm: false
    }), this.#waypointListComponent.element);
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

  #handleWaypointChange = (updatedWaypoint) => {
    this.#waypoints = updateWaypoint(this.#waypoints, updatedWaypoint);
    this.#waypointPresenter.get(updatedWaypoint.id).init(updatedWaypoint, this.#destinations, this.#offers);
  };
}
