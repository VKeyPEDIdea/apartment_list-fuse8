const InputText = ({ title }) => {
	const input = document.createElement('div');
	input.classList.add('input');

	const field = document.createElement('input');
	field.classList.add('input__field');
	
	const label = document.createElement('label');
	label.classList.add('input__label');
	label.textContent = title;

	input.appendChild(label);
	input.appendChild(field);
	
	return input;
};

export default InputText;