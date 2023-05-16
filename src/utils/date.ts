const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

/**
 * Return a date in format `Month Day, Year`
 */
export function formatDate(dateStr: string): string {
	const date = new Date(dateStr);

	const month = MONTHS[date.getUTCMonth()];
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();

	return `${month} ${day}, ${year}`;
}
