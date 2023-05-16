import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateSearchValue } from "../state/store";
import IClassNameProp from "../utils/className";
import "./TextInput.css";

interface ITextInputProps {
	placeholder?: string;
}

export default function TextInput({ placeholder, className }: ITextInputProps & IClassNameProp) {
	const text = useSelector((state: RootState) => state.searchValue);
	const dispatch = useDispatch();

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		dispatch(updateSearchValue(event.target.value));
	}

	return (
		<input
			className={`text-input ${className ?? ""}`}
			type="text"
			placeholder={placeholder ?? ""}
			value={text}
			onChange={handleChange}
		/>
	);
}
