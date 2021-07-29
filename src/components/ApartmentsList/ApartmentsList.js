import { homesStore } from '../../store/homes.store';
import Card from '../Card';

const ApartmentsList = query => {
	const response = homesStore.getHomesList();

	const section = document.createElement('section');
	section.classList.add('apartment-section');

	const list = document.createElement('div');
	list.classList.add('apartments');
	
	response.then(res => {
		res.filter(({ title }) => {
			const modifiedTitle = title.toLowerCase();
			return modifiedTitle.includes(query);
		}).map(data => {
			const card = Card(data);
			list.appendChild(card);
		});
	});

	section.appendChild(list);

	return section;
};

export default ApartmentsList;