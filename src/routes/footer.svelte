<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	$: currentPath = $page.url.pathname;
</script>

<footer class="fixed sm:static w-full bottom-0 py-4 z-50 bg-[#1a1a1a] sm:flex sm:justify-center">
	<span class="hidden sm:inline font-extralight text-neutral-500 text-xs"
		>&copy; {new Date().getUTCFullYear()} · no ads · no tracking</span
	>
	<ul class="flex flex-nowrap gap-4 overflow-x-auto min-w-full sm:hidden">
		<li
			class={currentPath === '/'
				? 'active mr-8 !ml-0 font-medium logo min-w-fit'
				: 'link mr-8 !ml-0 font-medium logo min-w-fit'}
		>
			<a href="/"><strong>{config.title}</strong></a>
		</li>
		<li>
			<a href="/blog" class={currentPath === '/blog' ? 'active' : 'link'}>blog</a>
		</li>
		<li>
			<a href="/listening" class={currentPath === '/listening' ? 'active' : 'link'}>listening</a>
		</li>
		<li>
			<a href="/reading" class={currentPath === '/reading' ? 'active' : 'link'}>reading</a>
		</li>
		<li>
			<a href="/running" class={currentPath === '/running' ? 'active' : 'link'}>running</a>
		</li>
		<li>
			<a href="/links" class={currentPath === '/links' ? 'active' : 'link'}>links</a>
		</li>
		<li>
			<a href="/now" class={currentPath === '/now' ? 'active last' : 'link last'}>now</a>
		</li>
	</ul>
</footer>

<style scoped>
	:root {
		--primary-color: #3c3c3c;
		--secondary-color: #ff3ca7;
		--background-color: #1a1a1a;
	}

	.link,
	.active {
		position: relative;
		cursor: pointer;
	}

	.active {
		text-decoration: 2px underline solid #ff3ca7;
		text-underline-offset: 1px;
	}

	.link::after,
	.active::after {
		content: '·';
		position: absolute;
		margin-left: 4px;
		cursor: default;
	}

	.active::before {
		cursor: default;
		background-color: var(--secondary-color);
	}

	.last::after {
		content: '';
	}

	.logo::after {
		content: '';
	}
</style>
