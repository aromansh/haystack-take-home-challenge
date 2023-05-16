import Image from "../models/Image";
import { formatDate } from "../utils/date";

export default class ImageService {
	private static readonly BASE_URL =
		"https://www.flickr.com/services/rest/?api_key=916daff0253492afb9e10bbc7c077bfc&format=json&nojsoncallback=1&extras=tags%2Cdate_taken%2Cowner_name";
	private static IMAGES_BY_TAG_CACHE: { [key: string]: Image[] } = {};
	private static LATEST_IMAGES_CACHE: Image[] = [];

	/**
	 * Retrieve the first page of the latest photos
	 */
	static async getLatestPhotos(): Promise<Image[]> {
		if (this.LATEST_IMAGES_CACHE.length > 0) return this.LATEST_IMAGES_CACHE;
		let response;

		const url = new URL(this.BASE_URL);
		url.searchParams.append("method", "flickr.interestingness.getList");

		try {
			response = await fetch(url.href);
		} catch (e) {
			console.error(`Error fetching latest photos: ${e}`);
			return [];
		}

		const images = this.parseResponse(await response.json());
		this.LATEST_IMAGES_CACHE = images;
		return images;
	}

	/**
	 * Retrieve the first page of images searched by a tag.
	 */
	static async searchByTag(tag: string): Promise<Image[]> {
		if (this.IMAGES_BY_TAG_CACHE[tag]) return this.IMAGES_BY_TAG_CACHE[tag];

		let response;

		const url = new URL(this.BASE_URL);
		url.searchParams.append("method", "flickr.photos.search");
		url.searchParams.append("tags", tag);
		url.searchParams.append("sort", "interestingness-desc");
		url.searchParams.append("safe_search", "1");

		try {
			response = await fetch(url.href);
		} catch (e) {
			console.error(`Error fetching photos by tag '${tag}': ${e}`);
			return [];
		}

		const images = this.parseResponse(await response.json());
		this.IMAGES_BY_TAG_CACHE[tag] = images;
		return images;
	}

	/**
	 * Parse a response from Flickr
	 */
	private static parseResponse(response: FlickrReponse): Image[] {
		return response.photos.photo.map((photo: FlickrImage) => ({
			id: photo.id,
			url: this.makeImageURL(photo.server, photo.id, photo.secret),
			author: photo.ownername,
			dateTaken: formatDate(photo.datetaken),
			tags: photo.tags
				.split(" ")
				.filter((tag: string) => tag != "")
				.slice(0, 3),
		}));
	}

	private static makeImageURL(server: string, id: string, secret: string): string {
		return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
	}
}

interface FlickrReponse {
	photos: {
		photo: FlickrImage[];
	};
}

interface FlickrImage {
	id: string;
	server: string;
	secret: string;
	ownername: string;
	datetaken: string;
	tags: string;
}
