<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	$: currentPath = $page.url.pathname;
</script>

<footer class="fixed sm:hidden w-full bottom-0 py-4 backdrop-blur-sm">
	<ul class="flex mx-auto gap-4">
		<li class="mr-8 font-medium">
			<a href="/"><strong>{config.title}</strong></a>
		</li>
		<li>
			<a href="/now" class={currentPath === '/now' ? 'active' : 'link'}>now</a>
		</li>
		<li>
			<a href="/listening" class={currentPath === '/listening' ? 'active' : 'link'}>listening</a>
		</li>
		<li>
			<a href="/reading" class={currentPath === '/reading' ? 'active last' : 'link last'}>reading</a
			>
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

	.link::before,
	.active::before {
		content: '';

		position: absolute;
		cursor: default;
		height: 2px;
		bottom: -6px;
		left: 0;
		right: 0;
		transform-origin: bottom left;
		transform: scaleX(1);
		transition: transform 0.3s ease-in-out;
	}

	.link::before {
		background-color: var(--primary-color);
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
</style>
