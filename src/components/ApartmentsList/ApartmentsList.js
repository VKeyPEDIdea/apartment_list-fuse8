import { homesStore } from '../../store/homes.store';
import Card from '../Card';
import Button from '../Button';

const ApartmentsList = query => {
	const response = homesStore.getHomesList();

	const section = document.createElement('section');
	section.classList.add('apartment-section');

	const list = document.createElement('div');
	list.classList.add('apartments');
	
	response.then((res) => {
		let homes = res.filter(({ title }, index) => {
			const modifiedTitle = title.toLowerCase();
			return modifiedTitle.includes(query) & index < 6;
		});

		homes.forEach(data => {
			const card = Card(data);
			list.appendChild(card);
		});

		if (homes.length >= 6) {
			const button = Button({ title: 'See more ›'});
			section.appendChild(button);
		}
	});

	section.appendChild(list);


	return section;
};

export default ApartmentsList;