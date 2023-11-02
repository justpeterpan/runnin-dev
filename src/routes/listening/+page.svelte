<script lang="ts">
	import Rating from '$lib/rating.svelte';
	export let data;
</script>

<div>
	<h1 class="text-5xl font-black mb-10 sm:hidden">Listening</h1>
	<p>
		Music I listened to and rated, starting from november '23.
		<br />
		Grouped by month and year. Ordered by the day I listened to them.
		<br />
		No genre boundaries, no time boundaries, no language boundaries.
	</p>
	<hr class="my-8 opacity-10" />
	<section class="mb-6">
		<h2 class="font-bold mb-1">♫ currently playing</h2>
		<div class="flex flex-row gap-2">
			{#if data.track.name}
				<img src={data.track.image[0]['#text']} alt="cover" class="w-12 h-12 rounded-sm" />
				<div class="flex flex-col">
					<div>
						<strong>Artist:</strong>
						{data?.track?.artist['#text']}
					</div>
					<div>
						<strong>Song:</strong>
						{data?.track?.name}
					</div>
				</div>
			{:else if data.track.message}
				<div>{data.track.message}</div>
			{:else}
				<div>{data.error}</div>
			{/if}
		</div>
	</section>
	<hr class="my-8 opacity-10" />
	<h2 class="mb-8 font-normal text-4xl"><strong class="font-extrabold">2023</strong> November</h2>
	<div class="flex flex-col space-y-12">
		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-60 aspect-square before:border-2 before:border-white before:top-2 before:left-2 before:w-full before:h-full before:absolute before:rounded-xl before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-xl border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b0/cf/0b/b0cf0b81-3d26-7bf9-6f9a-28f47dc9b5d2/00077774655453.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col">
				<h3 class="font-bold mb-0">Ronnie Laws - Pressure Sensitive (1975)</h3>
				<div class="mb-2">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<Rating rating={3} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-60 aspect-square before:border-2 before:border-white before:top-2 before:left-2 before:w-full before:h-full before:absolute before:rounded-xl before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-xl border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6b/a2/d7/6ba2d787-cb1c-d4a9-f528-138ff08a89b1/889030011664.png/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col">
				<h3 class="font-bold mb-0">(FKA) twigs - EP (2012-12-04)</h3>
				<div class="mb-2">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<Rating rating={4} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-60 aspect-square before:border-2 before:border-white before:top-2 before:left-2 before:w-full before:h-full before:absolute before:rounded-xl before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-xl border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1c/d0/b2/1cd0b26b-0b36-ddb7-191b-1501a8f17930/23UM1IM22187.rgb.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col">
				<h3 class="font-bold mb-0">Portishead - Roseland NYC Live 25 (2023-11-02)</h3>
				<div class="mb-2">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<Rating rating={4} />
			</div>
		</div>
	</div>
</div>
