import render from '@core/render';
import ApartmentsList from '../../components/ApartmentsList';
import Header from '../../components/Header';
import InputText from '../../components/InputText';

function LatestDevelopments() {
	const page = render([
		() => Header({ title: 'Our Latest Developments' }),
		() => InputText({ title: 'Filter' }),
		ApartmentsList
	]);

	return page;
}

export default LatestDevelopments;