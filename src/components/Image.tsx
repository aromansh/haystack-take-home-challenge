import Tag from "./Tag";
import ImageModel from "../models/Image";
import "./Image.css";
import { useState } from "react";
import IClassNameProp from "../utils/className";

type ImageProps = Omit<ImageModel, "id">;

export default function Image({ className, url, author, dateTaken, tags }: ImageProps & IClassNameProp) {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	return (
		<div className={`image ${className ?? ""}`}>
			<img className="image__image" src={url} onLoad={() => setIsLoading(false)}></img>
			<div className={`image__background ${isLoading ? "image__background--loading" : ""}`}>
				<div className="image__details">
					<p className="image__detail">
						by <b>{author}</b>
					</p>
					<p className="image__detail">Taken on {dateTaken}</p>
				</div>

				{tags.length > 0 && (
					<div className="image__tag-group">
						{tags.map((tag: string) => (
							<Tag key={tag} name={tag} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
