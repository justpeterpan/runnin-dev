<script>
	import Rating from '$lib/rating.svelte';
</script>

<div>
	<h1 class="text-5xl font-black mb-10 sm:hidden">Listening</h1>
	<p class="mb-8">
		Music I listened to and rated, starting from november '23.
		<br />
		Grouped by month and year. Ordered by the day I listened to them.
		<br />
		No genre boundaries, no time boundaries, no language boundaries.
		<br />
		<em class="text-xs text-neutral-400"
			>Disclaimer: I'm not a music critic, I just like to listen to music.</em
		>
	</p>
	<h2 class="mb-4 font-extrabold text-4xl">2023 November</h2>
	<div class="flex flex-col space-y-12">
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
				<h3 class="font-bold mb-0">(FKA) twigs - EP (2012)</h3>
				<div class="mb-2">
					<strong>Listened on:</strong> 2023-11-02
				</div>
				<Rating rating={4} />
			</div>
		</div>
	</div>
</div>
