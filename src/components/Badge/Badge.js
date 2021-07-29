const Badge = type => {;
	const badge = document.createElement('p');
	badge.textContent = type;
	badge.classList.add('badge');

	switch(type) {
		case 'IndependentLiving':
			badge.classList.add('badge--night');
			break;
		case 'SupportAvailable':
			badge.classList.add('badge--orange');
			break;
		default:
			badge.classList.add('badge--grey');
			break;
	}
	return badge;
};

export default Badge;