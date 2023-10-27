<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav class="sticky top-0 pt-8 backdrop-blur-md">
	<ul class="w-[640px] flex mx-auto gap-1 font-thin">
		<li class="mr-8">
			<a href="/"><b>{config.title}</b></a>
		</li>
		<li>
			<a href="/now">now</a> //
		</li>
		<li>
			<a href="/listening">listening</a> //
		</li>
		<li>
			<a href="/reading">reading</a> //
		</li>
	</ul>
</nav>
