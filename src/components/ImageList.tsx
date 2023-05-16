import { useSelector } from "react-redux";
import ImageModel from "../models/Image";
import { RootState } from "../state/store";
import Image from "./Image";
import "./ImageList.css";

export default function ImageList() {
	const images = useSelector((state: RootState) => state.images);
	const title = useSelector((state: RootState) => state.title);

	return (
		<div className="image-list">
			<h1 className="image-list__title">{title}</h1>
			{images.map((image: ImageModel) => (
				<Image
					className="image-list__image"
					key={image.id}
					url={image.url}
					author={image.author}
					dateTaken={image.dateTaken}
					tags={image.tags}
				/>
			))}
		</div>
	);
}
