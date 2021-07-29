import render from '@core/render';
import ApartmentsList from '../../components/ApartmentsList';
import Header from '../../components/Header';
import InputText from '../../components/InputText';

function LatestDevelopments() {
	let changed = false;

	const filterHandler = e => {
		const query = e.target.value.toLowerCase();
		
		if (query.length > 3) {
			const root = document.getElementById('app');
			const section = document.querySelector('.apartment-section');
			root.removeChild(section);
			
			const newList = ApartmentsList(query);
			root.appendChild(newList);
			changed = true;
		} else if (query.length < 4 && changed) {
			const root = document.getElementById('app');
			const section = document.querySelector('.apartment-section');
			root.removeChild(section);
			
			const newList = ApartmentsList('');
			root.appendChild(newList);
			changed = false;
		}
	};

	const page = render([
		() => Header({ title: 'Our Latest Developments' }),
		() => InputText({ title: 'Filter' }, filterHandler),
		() => ApartmentsList(''),
	]);

	return page;
}

export default LatestDevelopments;