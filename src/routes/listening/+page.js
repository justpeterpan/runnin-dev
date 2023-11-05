/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let track;
	let error;

	try {
		const response = await fetch('/api/currently-playing', { cache: '' });
		if (response.ok) {
			track = await response.json();
			return { track };
		} else {
			error = `Error: ${response.statusText}`;
			return { error };
		}
	} catch (err) {
		error = `Error: ${err.message}`;
		return { error };
	}
}
