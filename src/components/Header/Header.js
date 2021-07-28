const Header = config => {
	const { title } = config;
	const heading = document.createElement('h1');
	heading.textContent = title;
	return heading;
};

export default Header;