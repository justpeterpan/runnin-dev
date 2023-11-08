<script>
	import { onNavigate } from '$app/navigation';
	import '../app.postcss';
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="px-4">
	<Header />

	<main class="m-10 mx-auto sm:w-[640px] pb-32 sm:pb-12 sm:mb-0 min-h-[calc(100vh-155px)]">
		<slot />
	</main>

	<Footer />
</div>
