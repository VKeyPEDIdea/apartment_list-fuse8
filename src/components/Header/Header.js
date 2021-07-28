const Header = config => {
	const { title } = config;
	const header = document.createElement('header');
	header.classList.add('header');
	header.innerHTML = `
		<h1 class="header__title">${title}</h1>
	`;
	return header;
};

export default Header;