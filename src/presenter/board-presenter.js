import CreationForm from '../view/formCreator-view.js';
import EditingForm from '../view/formEditor-view.js';
import Sorting from '../view/sort-view.js';
import EventItem from '../view/eventItem-view.js';
import EventList from '../view/eventList-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  waypointListComponent = new EventList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new Sorting(), this.boardContainer);
    render(this.waypointListComponent, this.boardContainer);
    render(new CreationForm(), this.waypointListComponent.getElement());
    render(new EventItem(), this.waypointListComponent.getElement());
    render(new EditingForm(), this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventItem(), this.waypointListComponent.getElement());
    }
  }
}
