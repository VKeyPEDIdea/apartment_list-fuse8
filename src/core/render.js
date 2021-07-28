function render(components) {
	const parent = document.createDocumentFragment();
	
	components.map(Comp => {
		const element = Comp();
		parent.appendChild(element);
	});

	return parent;
}

export default render;