import FormCreator from '../view/formCreator-view.js';
import FormEditor from '../view/formEditor-view.js';
import SortView from '../view/sort-view.js';
import EditItem from '../view/eventItem-view.js';
import EventList from '../view/eventList-view.js';
import {render} from '../render.js';
import {isEsc} from '../util.js';

export default class BoardPresenter {
  #waypointListComponent = null;
  #boardContainer = null;
  #waypointsModel = null;

  constructor({boardContainer, waypointsModel}) {
    this.#boardContainer = boardContainer;
    this.#waypointsModel = waypointsModel;
  }

  init() {
    const waypoints = [...this.#waypointsModel.arrWaypoints];
    render(new SortView(), this.#boardContainer);
    this.#waypointListComponent = new EventList();
    render(this.#waypointListComponent, this.#boardContainer);
    render(new FormCreator(), this.#waypointListComponent.element);
    this.#renderWaypoint(waypoints[0]);
    for (let i = 1; i < 4; i++) {
      this.#renderWaypoint(waypoints[i]);
    }
  }

  #renderWaypoint(waypoint) {
    const waypointComponent = new EditItem(waypoint);
    const formComponent = new FormEditor(waypoint);

    const replaceFormToWaypoint = () => {
      this.#waypointListComponent.element.replaceChild(waypointComponent.element, formComponent.element);
    };

    const replaceWaypointToForm = () => {
      this.#waypointListComponent.element.replaceChild(formComponent.element, waypointComponent.element);
    };

    waypointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceWaypointToForm();
      document.body.addEventListener('keydown', closeOnEsc);
    });

    formComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToWaypoint();
      document.body.removeEventListener('keydown', closeOnEsc);
    });

    function closeOnEsc(evt) {
      if (isEsc(evt)) {
        evt.preventDefault();
        replaceFormToWaypoint();
        document.body.removeEventListener('keydown', closeOnEsc);
      }
    }

    formComponent.element.querySelector('.event').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToWaypoint();
      document.body.removeEventListener('keydown', closeOnEsc);
    });

    render(waypointComponent, this.#waypointListComponent.element);
  }
}
