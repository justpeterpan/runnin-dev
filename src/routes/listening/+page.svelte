<script lang="ts">
	import albums from './albums.json';
	import Album from '$lib/album.svelte';
	import PlayingIndicator from '$lib/playing-indicator.svelte';
	import { onMount } from 'svelte';

	let data: {
		['@attr']?: { nowplaying: string };
		album: { '#text': string };
		artist: { '#text': string };
		image: { '#text': string }[];
		name: string;
		message?: string;
	};

	let loading = true;

	onMount(async () => {
		const response = await fetch('/api/currently-playing');
		data = await response.json();
		loading = false;
	});
</script>

<div>
	<h1 class="text-5xl font-black mb-10 sm:hidden">Listening</h1>
	<section class="mb-6">
		<h2 class="font-bold mb-2">♫ currently playing</h2>
		<div class="flex flex-row gap-7 h-12">
			{#if data?.name !== undefined}
				<PlayingIndicator />
				<img src={data.image[3]['#text']} alt="cover" class="w-12 h-12 rounded-sm absolute" />
				<div class="grid grid-cols-2-max-content font-extralight">
					<strong>Artist:&nbsp;</strong>
					{data?.artist['#text']}
					<strong>Song:&nbsp;</strong>
					{data?.name}
				</div>
			{:else if loading}
				<div>loading...</div>
			{:else}
				<div>{data?.message || 'something went wrong'}</div>
			{/if}
		</div>
	</section>
	<hr class="my-8 opacity-10" />
	<h2 class="font-black text-4xl">2023</h2>
	<p class="font-extralight mb-8">recently listened to and rated</p>
	<div class="flex flex-col space-y-12">
		{#each albums as album}
			<Album {album} />
		{/each}
	</div>
	<div class="flex flex-col space-y-12" />
</div>

<style>
	.grid-cols-2-max-content {
		grid-template-columns: repeat(2, minmax(0, max-content));
	}
</style>
