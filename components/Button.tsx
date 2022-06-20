interface IButtonProps {
	label: string;
	onButtonClick: () => any;
	type: keyof typeof buttonTypes;
}

const buttonTypes = {
	primary: 'btn',
	secondary: 'btn-ghost',
};

export default function Button({ label, onButtonClick, type }: IButtonProps) {
	return (
		<button className={buttonTypes[type]} onClick={onButtonClick}>
			{label}
		</button>
	);
}
