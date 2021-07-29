import render from '@core/render';
import ApartmentsList from '../../components/ApartmentsList';
import Header from '../../components/Header';
import InputText from '../../components/InputText';

function LatestDevelopments() {
	let changed = false;

	const filterHandler = e => {
		const query = e.target.value;
		const root = document.getElementById('app');
		const section = document.querySelector('.apartment-section');
		
		if (query.length > 3) {
			root.removeChild(section);
			
			const modifiedQuery = query.toLowerCase();
			const newList = ApartmentsList(modifiedQuery);
			root.appendChild(newList);
			changed = true;
		} else if (query.length < 3 && changed) {
			root.removeChild(section);
			
			const newList = ApartmentsList('');
			root.appendChild(newList);
			changed = false;
		}
	};

	const page = render([
		() => Header({ title: 'Our Latest Developments' }),
		() => InputText({ title: 'Filter' }, filterHandler),
		() => ApartmentsList('')
	]);

	return page;
}

export default LatestDevelopments;