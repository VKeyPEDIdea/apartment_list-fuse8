import render from '@core/render';
import ApartmentsList from '../../components/ApartmentsList';
import Header from '../../components/Header';

function LatestDevelopments() {
	const page = render([
		() => Header({ title: 'Our Latest Developments' }),
		ApartmentsList
	]);
	return page;
}

export default LatestDevelopments;