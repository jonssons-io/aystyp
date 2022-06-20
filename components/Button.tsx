import React from 'react';

interface IButtonProps {
	label: string;
	onButtonClick: () => any;
	type: 'CTA' | 'Secondary';
}

const buttonTypes = {
	CTA: 'btn',
	Secondary: 'btn-ghost',
};

export default function Button({ label, onButtonClick, type }: IButtonProps) {
	return (
		<button className={buttonTypes[type]} onClick={onButtonClick}>
			{label}
		</button>
	);
}
