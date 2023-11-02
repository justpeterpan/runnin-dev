<script lang="ts">
	export let rating = 0;
	const starCount = 5;

	// Function to determine the class for each star's fill
	function starFill(index: number) {
		if (index < Math.floor(rating)) {
			return 'full';
		} else if (index === Math.floor(rating) && rating % 1 >= 0.5) {
			return 'half';
		} else {
			return 'empty';
		}
	}
</script>

<span class="rating">
	{#each Array(starCount) as _, index}
		<svg class="star" viewBox="0 0 24 24">
			<!-- Always render the star outline -->
			<path
				d="M12 2 L15.09 8.45 L22 9.27 L17 14.18 L18.18 21.09 L12 17.77 L5.82 21.09 L7 14.18 L2 9.27 L8.91 8.45 Z"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<!-- Conditionally render the star fill -->
			<path
				d="M12 2 L15.09 8.45 L22 9.27 L17 14.18 L18.18 21.09 L12 17.77 L5.82 21.09 L7 14.18 L2 9.27 L8.91 8.45 Z"
				fill={starFill(index) === 'full' ? 'currentColor' : 'none'}
				class={starFill(index)}
			/>
		</svg>
	{/each}
</span>

<!-- Define the linear gradient for the half-filled star -->
<svg height="0" width="0">
	<defs>
		<linearGradient id="half-fill-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="50%" style="stop-color:currentColor; stop-opacity:1" />
			<stop offset="50%" style="stop-color:currentColor; stop-opacity:0" />
		</linearGradient>
	</defs>
</svg>

<style>
	.rating {
		display: inline-flex;
		align-items: center;
	}

	.star {
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 0.15rem;
	}

	.star .half {
		/* Apply a linear gradient to fill half of the star */
		fill: url(#half-fill-gradient);
	}
</style>
