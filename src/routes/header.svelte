<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	$: currentPath = $page.url.pathname;
</script>

<nav class="sticky top-0 pt-8 backdrop-blur-md z-50 pb-2">
	<ul class="hidden sm:w-[640px] sm:flex mx-auto gap-1">
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
</style>
