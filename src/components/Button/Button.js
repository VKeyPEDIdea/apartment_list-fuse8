const Button = ({ title, link }) => {
	const button = document.createElement(link ? 'a' : 'button');
	button.classList.add('button');
	if (link) button.href = link;
	button.textContent = title;

	return button;
};

export default Button;