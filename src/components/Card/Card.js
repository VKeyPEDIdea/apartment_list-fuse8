import Badge from '../Badge/';

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
		<div class="card__img"
			style="background-image: url('https://via.placeholder.com/380x240/d8d8d8/FFFFFF?text=${title}')">
			<div class="card__type"></div>
		</div>
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

	const cardType = card.querySelector('.card__type');
	cardType.appendChild(Badge(type));

	card.addEventListener('click', e => {
		e.preventDefault();
	});

	return card;
};

export default Card;