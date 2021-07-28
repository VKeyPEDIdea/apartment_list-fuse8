const Badge = type => {;
	const badge = document.createElement('p');
	badge.textContent = type;
	badge.classList.add('badge');

	switch(type) {
		case 'IndependentLiving':
			badge.classList.add('badge--night');
		case 'SupportAvailable':
			badge.classList.add('badge--orange');
		default:
			badge.classList.add('badge--grey');

	}
	return badge;
};

export default Badge;