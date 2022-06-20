import { ButtonHTMLAttributes } from 'react';

const buttonVariant = {
	primary: 'btn',
	secondary: 'btn-ghost',
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: keyof typeof buttonVariant;
}

export default function Button({ variant, ...props }: IButtonProps) {
	return <button {...props} className={buttonVariant[variant]} />;
}
