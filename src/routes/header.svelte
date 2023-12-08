<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	const links = [
		{ href: '/', text: config.title, class: 'mr-8 font-bold logo' },
		{ href: '/blog', text: 'blog' },
		{ href: '/listening', text: 'listening' },
		{ href: '/reading', text: 'reading' },
		{ href: '/running', text: 'running' },
		{ href: '/links', text: 'links' },
		{ href: '/now', text: 'now' }
	];
	$: currentPath = $page.url.pathname;
</script>

<nav class="sm:flex justify-center hidden sticky top-0 pt-8 z-50 pb-8 backdrop-blur-md">
	<ul class="relative p-0 m-0 sm:w-[640px] sm:flex bg-contain gap-4">
		{#each links as link}
			<li class={link.class}>
				<a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}
					>{link.text}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style scoped>
	:root {
		--primary-color: #3c3c3c;
		--secondary-color: #ff3ca7;
		--background-color: #1a1a1a;
	}

	li {
		position: relative;
		height: 100%;
	}

	a[aria-current='page']::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ff3ca7;
		view-transition-name: active-page;
	}

	.logo::before {
		content: '👟';
		position: absolute;
		right: 90px;
		bottom: -4px;
		transform: scale(1.5);
	}
</style>
