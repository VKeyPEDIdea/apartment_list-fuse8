const Card = config => {
	const {
		title,
		address,
		type,
		price,
		id,
	} = config;

	const card = document.createElement('a');
	card.href = `/details/${id}`;
	card.classList.add('card');
	card.innerHTML = `
		<div data-id="${id}" class="card-info">
			<div class="card-info__box">
				<p class="card-info__title">${title}</p>
				<p class="card-info__address">${address}</p>
			</div>
			<div class="card-info__box">
				<p class="card-info__price">
					New Properties for Sale from
					<span class="card-info__price-count">£${price}</span>
				</p>
				<p class="card-info__additional">Shared Ownership Available</p>
			</div>
		</div>
	`;

	card.addEventListener('click', e => {
		e.preventDefault();
	});

	return card;
};

export default Card;