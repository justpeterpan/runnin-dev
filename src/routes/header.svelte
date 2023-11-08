<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	$: currentPath = $page.url.pathname;
</script>

<nav class="sm:block hidden sticky top-0 pt-8 bg-[#1a1a1a] z-50 pb-2">
	<ul class="sm:w-[640px] sm:flex mx-auto gap-1">
		<li
			class={currentPath === '/'
				? 'active mr-8 !ml-0 font-medium logo'
				: 'link mr-8 !ml-0 font-medium logo'}
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
</nav>

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
		margin-left: 18px;
	}

	.link::before,
	.active::before {
		content: '';

		position: absolute;
		cursor: default;
		border-radius: 2px;
		height: 2px;
		bottom: -6px;
		left: 0;
		right: 0;
		transform-origin: bottom left;
		transform: scaleX(1);
		transition: transform 0.3s ease-in-out;
	}

	.link:hover::before {
		transform: scaleX(0);
		cursor: default;
		transform-origin: bottom right;
	}

	.link::after,
	.active::after {
		content: '·';
		position: absolute;
		margin-left: 8px;
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
