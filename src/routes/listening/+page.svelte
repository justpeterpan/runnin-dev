<script lang="ts">
	import albums from './albums.json';
	import Album from '$lib/album.svelte';
	export let data;
</script>

<div>
	<h1 class="text-5xl font-black mb-10 sm:hidden">Listening</h1>
	<section class="mb-6">
		<h2 class="font-bold mb-1">♫ currently playing</h2>
		<div class="flex flex-row gap-5">
			{#if data.track.name}
				<div class="equalizer h-12 relative z-10 left-1.5">
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
					<div class="equalizer-bar" />
				</div>
				<img src={data.track.image[3]['#text']} alt="cover" class="w-12 h-12 rounded-sm absolute" />
				<div class="grid grid-cols-2-max-content font-extralight">
					<strong>Artist:&nbsp;</strong>
					{data?.track?.artist['#text']}
					<strong>Song:&nbsp;</strong>
					{data?.track?.name}
				</div>
			{:else if data.track.message}
				<div>{data.track.message}</div>
			{:else}
				<div>{data.error}</div>
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

<!---->

<style>
	.equalizer {
		display: flex;
		align-items: flex-end;
	}

	.equalizer-bar {
		width: 3px;
		background-color: white;
		margin: 0 1px;
		animation: equalize 2s infinite;
	}

	@keyframes equalize {
		0%,
		100% {
			height: 4px;
		}
		25% {
			height: 10px;
		}
		50% {
			height: 6px;
		}
		75% {
			height: 14px;
		}
	}

	.equalizer-bar:nth-child(1) {
		animation-delay: 0.1s;
	}
	.equalizer-bar:nth-child(2) {
		animation-delay: 0.2s;
	}
	.equalizer-bar:nth-child(3) {
		animation-delay: 1.3s;
	}
	.equalizer-bar:nth-child(4) {
		animation-delay: 0.8s;
	}
	.equalizer-bar:nth-child(5) {
		animation-delay: 0.5s;
	}
	.equalizer-bar:nth-child(6) {
		animation-delay: 1.6s;
	}
	.equalizer-bar:nth-child(7) {
		animation-delay: 2s;
	}

	.grid-cols-2-max-content {
		grid-template-columns: repeat(2, minmax(0, max-content));
	}
</style>
