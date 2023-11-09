<script lang="ts">
	import MusicServices from './music-services.svelte';
	import Rating from './rating.svelte';

	type Album = {
		name: string;
		artist: string;
		releaseDate: string;
		listenedOn: string;
		rating: number;
		cover: string;
		spotify: string;
		appleMusic: string;
	};

	export let album: Album;
</script>

<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
	<div
		class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
	>
		<img
			class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
			width="200"
			height="200"
			src={album.cover}
			alt={album.name}
			loading="lazy"
		/>
	</div>
	<div class="flex flex-col justify-center">
		<div class="flex flex-row flex-wrap gap-2">
			<h3 class="font-bold mb-0">{album.artist} - {album.name}</h3>
			<MusicServices am={album.appleMusic} sp={album.spotify} />
		</div>
		<div class="font-extralight">
			<strong>Listened on:</strong>
			{album.listenedOn}
		</div>
		<div class="mb-2 font-extralight">
			<strong>Release date:</strong>
			{album.releaseDate}
		</div>
		<Rating rating={album.rating} />
	</div>
</div>
