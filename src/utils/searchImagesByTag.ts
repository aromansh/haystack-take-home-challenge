import { searchImagesByTag, searchLatestImages } from "../state/actions";
import { RootStore } from "../state/store";

/**
 * Searches images by a tag, if it comes in the event. Otherwise, searches the latest images.
 */
export function searchImagesByEventTag(store: RootStore) {
	return function (event: PopStateEvent) {
		const parsedEvent = event as unknown as IPopStateEvent;

		// Retrieve tag from url path (e.g. '/tag/:tag'), if any
		const tag = parsedEvent.currentTarget.location.pathname.split("/").filter((path: string) => path != "")[1];

		if (!tag) store.dispatch(searchLatestImages());
		else store.dispatch(searchImagesByTag({ tag, pushURL: false }));
	};
}

interface IPopStateEvent {
	currentTarget: {
		location: {
			pathname: string;
		};
	};
}
