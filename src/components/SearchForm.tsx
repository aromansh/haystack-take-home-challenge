import Button from "./Button";
import TextInput from "./TextInput";
import { useSelector } from "react-redux";
import store, { RootState } from "../state/store";
import { searchImagesByTag } from "../state/actions";
import "./SearchForm.css";

export default function SearchForm() {
	const searchValue = useSelector((state: RootState) => state.searchValue);
	const handleSubmit = () => store.dispatch(searchImagesByTag({ tag: searchValue, pushURL: true }));

	return (
		<div className="search-form">
			<p className="search-form__title">Search by tag</p>
			<form className="search-form__input-group" onSubmit={handleSubmit}>
				<TextInput className="search-form__input" placeholder="flags" />
				<Button className="search-form__button" value="Search" onClick={handleSubmit} />
			</form>
		</div>
	);
}
