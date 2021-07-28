import { homesStore } from '../../store/homes.store';
import Card from '../Card';

const ApartmentsList = () => {
	const response = homesStore.getHomesList();
	const list = document.createElement('div');
	list.classList.add('apartments');
	
	response.then(res => {
		res.map(data => {
			const card = Card(data);
			// const paragraph = document.createElement('p');
			// paragraph.textContent = title;	
			// card.appendChild(paragraph);
			list.appendChild(card);
		});
	});

	return list;
};

export default ApartmentsList;