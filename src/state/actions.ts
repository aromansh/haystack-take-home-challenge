import ImageService from "../api/ImageService";
import { RootDispatch, updateImages, updateSearchValue } from "./store";

export function searchImagesByTag(params: { tag: string; pushURL: boolean }) {
	const { tag, pushURL } = params;

	return async (dispatch: RootDispatch) => {
		if (tag === "") return;
		const images = await ImageService.searchByTag(tag);

		if (pushURL) window.history.pushState(null, document.title, `/tag/${tag}`);

		dispatch(
			updateImages({
				images,
				title: "Results",
			})
		);
		dispatch(updateSearchValue(tag));
	};
}

export function searchLatestImages() {
	return async (dispatch: RootDispatch) => {
		const images = await ImageService.getLatestPhotos();

		dispatch(
			updateImages({
				images,
				title: "Trending Photos Right Now",
			})
		);
		dispatch(updateSearchValue(""));
	};
}
