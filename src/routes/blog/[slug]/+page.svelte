<script lang="ts">
	import Footer from '../../footer.svelte';

	export let data;

	function customClasses() {
		switch (data.meta.fullscreen) {
			case true:
				return 'fixed object-cover w-full h-full top-0 left-0 brightness-50';
			case false:
				return 'w-full h-80';
			default:
				return 'w-full h-80';
		}
	}
</script>

<div class="flex flex-row-reverse text-xs justify-between relative z-10 mb-4">
	<div class="bg-black opacity-80 px-4 rounded-full py-2">
		{data.meta.date}
	</div>

	<div class="flex flex-row place-items-center gap-2">
		{#each data.meta.tags as tag}
			<div class="bg-black rounded-full px-4 py-2">#{tag}</div>
		{/each}
	</div>
</div>

<div>
	<img src={data.meta.img} alt="" class={customClasses()} />
</div>

<article class="prose canvas">
	<svelte:component this={data.content} class="prose" />
</article>
