<script lang="ts">
	import '../app.postcss';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<div>
	<Header />

	<main class="m-10 w-[640px] mx-auto">
		<slot />
	</main>

	<Footer />
</div>
