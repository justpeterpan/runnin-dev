<script lang="ts">
	import '../app.postcss';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
</script>

<div class="px-4">
	<Header />

	<main class="m-10 mx-auto sm:w-[640px]">
		<slot />
	</main>

	<Footer />
</div>
