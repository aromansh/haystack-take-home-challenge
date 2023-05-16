import { FormEvent, FormEventHandler } from "react";
import IClassNameProp from "../utils/className";
import "./Button.css";

interface IButtonProps {
	value: string;
	onClick: FormEventHandler<HTMLButtonElement>;
}

export default function Button({ value, onClick, className }: IButtonProps & IClassNameProp) {
	function handleClick(e: FormEvent<HTMLButtonElement>) {
		e.preventDefault();
		onClick(e);
	}

	return (
		<button className={`button ${className ?? ""}`} onClick={handleClick}>
			{value}
		</button>
	);
}
