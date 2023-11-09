<script>
	import PostCard from '$lib/post-card.svelte';
	import { onMount } from 'svelte';

	let posts;

	onMount(async () => {
		const response = await fetch('/api/posts');
		posts = await response.json();
	});
</script>

<div class="grid sm:grid-cols-2 gap-2">
	{#if posts?.length > 0}
		{#each posts as post}
			<PostCard title={post.title} img={post.img} height={post.height} post={post.slug} />
		{/each}
	{/if}
</div>
