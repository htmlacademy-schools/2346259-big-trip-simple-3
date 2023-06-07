import FormCreator from '../view/formCreator-view.js';
import EditForm from '../view/formEditor-view.js';
import SortView from '../view/sort-view.js';
import EditItem from '../view/eventItem-view.js';
import EventList from '../view/eventList-view.js';
import {isEsc} from '../util.js';
import NoPoint from '../view/noItems.js';
import {render, replace} from '../framework/render.js';

export default class BoardPresenter {
  #waypointListComponent = null;
  #boardContainer = null;
  #waypointsModel = null;
  #noWaypointMessage = null;
  #sorters = null;

  constructor({boardContainer, waypointsModel, sorters}) {
    this.#boardContainer = boardContainer;
    this.#waypointsModel = waypointsModel;
    this.#sorters = sorters;
  }

  init() {
    const waypoints = [...this.#waypointsModel.arrWaypoints];
    if (waypoints.length === 0) {
      this.#noWaypointMessage = new NoPoint();
      render(this.#noWaypointMessage, this.#boardContainer);
    } else {
      this.#waypointListComponent = new EventList();
      render(new SortView(this.#sorters), this.#boardContainer);
      render(this.#waypointListComponent, this.#boardContainer);
      render(new FormCreator(waypoints[0]), this.#waypointListComponent.element);

      for (let i = 1; i < 4; i++) {
        this.#renderWaypoint(waypoints[i]);
      }
    }
  }

  #renderWaypoint(waypoint) {
    const ecsHandler = (evt) => {
      if (isEsc(evt)) {
        evt.preventDefault();
        replaceFormToWaypoint();
        document.body.removeEventListener('keydown', ecsHandler);
      }
    };
    const waypointComponent = new EditItem({
      oneWaypoint: waypoint,
      onClick: () => {
        replaceWaypointToForm.call(this);
        document.body.addEventListener('keydown', ecsHandler);
      }
    });

    const formComponent = new EditForm({
      oneWaypoint: waypoint,
      onSubmit: () => {
        replaceFormToWaypoint.call(this);
        document.body.removeEventListener('keydown', ecsHandler);
      }
    });

    function replaceFormToWaypoint() {
      replace(waypointComponent, formComponent);
    }

    function replaceWaypointToForm(){
      replace(formComponent, waypointComponent);
    }

    render(waypointComponent, this.#waypointListComponent.element);
  }
}
