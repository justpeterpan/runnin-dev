import { LFM_KEY, LFM_USER } from '$env/static/private';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LFM_USER}&api_key=${LFM_KEY}&format=json&nowplaying=%22true%22`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || 'Failed to fetch data from Last.fm');
		}

		const nowPlayingTrack = data.recenttracks.track.find(
			(track) => track['@attr']?.nowplaying === 'true'
		);

		if (nowPlayingTrack) {
			return new Response(JSON.stringify(nowPlayingTrack), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} else {
			return new Response(JSON.stringify({ message: 'No track is currently playing.' }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
