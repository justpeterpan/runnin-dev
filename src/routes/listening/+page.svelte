<!-- FILEPATH: /Users/peter/dev/side-projects/runnindev/src/routes/listening/+page.svelte -->

<script>
	// Define an array of objects representing the albums you're listening to
	const albums = [
		{
			title: 'Album 1',
			artist: 'Artist 1',
			cover:
				'https://images.pexels.com/photos/4646564/pexels-photo-4646564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Album 2',
			artist: 'Artist 2',
			cover:
				'https://images.pexels.com/photos/18443847/pexels-photo-18443847/free-photo-of-light-bulbs-outdoors-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Album 3',
			artist: 'Artist 3',
			cover:
				'https://images.pexels.com/photos/5929706/pexels-photo-5929706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Album 4',
			artist: 'Artist 4',
			cover:
				'https://images.pexels.com/photos/3075449/pexels-photo-3075449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		}
	];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
	{#each albums as album}
		<div
			class="relative w-60 h-60 md:w-44 md:h-44 before:border-2 before:border-white before:top-2 before:left-2 before:w-full before:h-full before:absolute before:rounded-xl before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
		>
			<img
				class="absolute object-cover aspect-square inset-0 rounded-xl border-2 border-white"
				src={album.cover}
				alt={album.title}
			/>
		</div>
	{/each}
</div>
