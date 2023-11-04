<script>
	import AM from '$lib/assets/am.svg';
	import SP from '$lib/assets/sp.svg';
	export let am = '';
	export let sp = '';
</script>

<div class="flex flex-row gap-1 place-self-center">
	<a href="https://music.apple.com/de/album/{am}" target="_blank"
		><img src={AM} alt="apple music logo" class="w-4 ml-4" /></a
	>
	<a href="https://open.spotify.com/album/{sp}" target="_blank"
		><img src={SP} alt="spotify logo" class="w-4" /></a
	>
</div>
