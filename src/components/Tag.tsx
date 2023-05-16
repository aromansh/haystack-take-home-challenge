import { searchImagesByTag } from "../state/actions";
import store from "../state/store";
import "./Tag.css";

export interface ITagProps {
	name: string;
}

export default function Tag({ name }: ITagProps) {
	const handleClick = () => store.dispatch(searchImagesByTag({ tag: name, pushURL: true }));

	return (
		<div className="tag" onClick={handleClick}>
			{name}
		</div>
	);
}
