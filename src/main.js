import {render} from './render.js';
import Filters from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const headerElement = document.querySelector('.trip-controls__filters');
const container = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: container});

render(new Filters(), headerElement);
boardPresenter.init();
