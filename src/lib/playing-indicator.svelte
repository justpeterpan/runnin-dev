<div class="equalizer h-12 relative z-10 left-1.5">
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
	<div class="equalizer-bar" />
</div>

<style>
	.equalizer {
		display: flex;
		align-items: flex-end;
	}

	.equalizer-bar {
		width: 3px;
		background-color: white;
		margin: 0 1px;
		animation: equalize 2s infinite;
	}

	@keyframes equalize {
		0%,
		100% {
			height: 4px;
		}
		25% {
			height: 10px;
		}
		50% {
			height: 6px;
		}
		75% {
			height: 14px;
		}
	}

	.equalizer-bar:nth-child(1) {
		animation-delay: 0.1s;
	}
	.equalizer-bar:nth-child(2) {
		animation-delay: 0.2s;
	}
	.equalizer-bar:nth-child(3) {
		animation-delay: 1.3s;
	}
	.equalizer-bar:nth-child(4) {
		animation-delay: 0.8s;
	}
	.equalizer-bar:nth-child(5) {
		animation-delay: 0.5s;
	}
	.equalizer-bar:nth-child(6) {
		animation-delay: 1.6s;
	}
	.equalizer-bar:nth-child(7) {
		animation-delay: 2s;
	}
</style>
