<script lang="ts">
	import Rating from '$lib/rating.svelte';
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
		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/48/1d/68/481d68f8-bc99-f2a4-a194-e8abf4c4ccf4/00600753830468.rgb.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">Guru - Guru's Jazzmatazz, Vol. 1</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-04
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 1993-18-05
				</div>
				<Rating rating={4} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/cf/ee/a4/cfeea4b7-e42a-e566-5b33-5353ed2a9f40/23UMGIM87104.rgb.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">Patrice - 9</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-03
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 2023-11-03
				</div>
				<Rating rating={4} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/12/31/4f/12314f82-1d6c-3478-811a-276bf8f3af18/61297805334.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">Caraml - Seasons</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-03
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 2023-11-03
				</div>
				<Rating rating={3.5} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b0/cf/0b/b0cf0b81-3d26-7bf9-6f9a-28f47dc9b5d2/00077774655453.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">Ronnie Laws - Pressure Sensitive</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 1975
				</div>
				<Rating rating={3} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6b/a2/d7/6ba2d787-cb1c-d4a9-f528-138ff08a89b1/889030011664.png/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">(FKA) twigs - EP</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 2012-12-04
				</div>
				<Rating rating={4} />
			</div>
		</div>

		<!--  -->
		<div class="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
			<div
				class="relative w-full sm:w-28 aspect-square before:border-2 before:border-white before:top-1 before:left-1.5 before:w-full before:h-full before:absolute before:rounded-lg before:bg-[#1a1a1a] hover:before:bg-white before:transition-colors before:duration-500 before:ease-in-out"
			>
				<img
					class="absolute inset-0 rounded-lg border-2 border-white object-cover w-full h-full"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1c/d0/b2/1cd0b26b-0b36-ddb7-191b-1501a8f17930/23UM1IM22187.rgb.jpg/632x632bb.webp"
					alt="album cover"
				/>
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="font-bold mb-0">Portishead - Roseland NYC Live 25</h3>
				<div class="font-extralight">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<div class="mb-2 font-extralight">
					<strong>Release date:</strong> 2023-11-02
				</div>
				<Rating rating={4} />
			</div>
		</div>
	</div>
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
