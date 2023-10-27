<!-- FILEPATH: /Users/peter/dev/side-projects/runnindev/src/routes/listening/+page.svelte -->

<script>
	// Define an array of objects representing the albums you're listening to
	const albums = [
		{
			title: 'Album 1',
			artist: 'Artist 1',
			cover: 'https://via.placeholder.com/150'
		},
		{
			title: 'Album 2',
			artist: 'Artist 2',
			cover: 'https://via.placeholder.com/150'
		},
		{
			title: 'Album 3',
			artist: 'Artist 3',
			cover: 'https://via.placeholder.com/150'
		},
		{
			title: 'Album 4',
			artist: 'Artist 4',
			cover: 'https://via.placeholder.com/150'
		}
	];
</script>

<div class="grid grid-cols-3 gap-4">
	{#each albums as album}
		<img class="mb-2" src={album.cover} alt={album.title} />
	{/each}
</div>
