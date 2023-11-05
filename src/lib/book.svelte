<script lang="ts">
	export let cover: string;
</script>

<div class="btn w-40">
	<img src={cover} alt="book cover" />
</div>

<style>
	:root {
		--slate-color: white;
		--blue-color: white;
		--pink-color: white;
	}

	.btn {
		color: white;
		position: relative;
		align-self: center;
		border: 2px #ffffff solid;
		border-image: linear-gradient(45deg, #ffffff, #ffffff);
		border-image-slice: 1 0 0 1;
		z-index: 1;
		box-shadow: 10px 10px rgba(255, 255, 255, 0);
	}
	.btn:before,
	.btn:after {
		border: 2px #ffffff solid;
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
	}
	.btn:before {
		right: -10px;
		top: 3px;
		width: 10px;
		height: 100.9%;
		transform: skewY(45deg);
		border-top: 3px solid white;
		border-bottom: none;
	}
	.btn:after {
		border-image-slice: 1 0 1 1;
		bottom: -10px;
		right: -5px;
		width: 101.2%;
		height: 10px;
		transform: skewX(45deg);
		border-left: 3px solid white;
		border-right: none;
	}
</style>
