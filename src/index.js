import './scss/index.scss';
import LatestDevelopments from './pages/LatestDevelopments/';

const root = document.getElementById('app');
const page = LatestDevelopments;

const render = page => {
	const element = page();
	root.appendChild(element);
};

render(page);